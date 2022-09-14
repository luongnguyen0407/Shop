import { all, call, put } from "redux-saga/effects";
import { setDataUser, setError, setLoading, setLogin } from "./authSlide";
import { logOut, reqLogin, reqRegister, resConnect } from "./requestAuth";

export function* handleLogin({ payload }) {
  try {
    yield put(setLoading(true));
    yield put(setError(""));
    let res;
    if (!payload.rfpassword) {
      res = yield call(reqLogin, payload);
    } else {
      res = yield call(reqRegister, payload);
    }
    yield all([
      put(setDataUser(res)),
      put(setLoading(false)),
      put(setLogin(true)),
      put(setError("")),
    ]);
  } catch (error) {
    yield put(setError(error.response.data.message));
    yield put(setLoading(false));
  }
}
export function* connectReLoad() {
  try {
    const res = yield call(resConnect);
    if (!res.accessToken) return;
    yield all([
      put(setDataUser(res)),
      put(setLogin(true)),
      put(setLoading(false)),
    ]);
  } catch (error) {
    put(setLoading(false));
  }
}

export function* handleLogOut({ payload }) {
  try {
    yield call(logOut, payload);
    yield all([put(setDataUser({}))]);
  } catch (error) {
    console.log(error);
  }
}

import { all, call, put } from "redux-saga/effects";
import { setDataUser, setError, setLoading, setLogin } from "./authSlide";
import { reqLogin, reqRegister, resConnect } from "./requestAuth";

export function* handleLogin({ payload }) {
  try {
    yield put(setLoading(true));
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
    yield all([
      put(setDataUser(res)),
      put(setLogin(true)),
      put(setLoading(false)),
    ]);
  } catch (error) {
    put(setLoading(false));
  }
}
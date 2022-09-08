import { call, put } from "redux-saga/effects";
import { setDataUser, setError, setLoading } from "./authSlide";

import { reqLogin } from "./reqLogin";

export default function* handleLogin({ payload }) {
  try {
    yield put(setLoading(true));
    const res = yield call(reqLogin, payload);
    yield put(setDataUser(res));
    yield put(setLoading(false));
    yield put(setError(""));
    console.log(res);
  } catch (error) {
    yield put(setError(error.response.data.message));
    yield put(setLoading(false));
  }
}

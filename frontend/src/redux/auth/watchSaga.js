import { takeLatest } from "redux-saga/effects";
import { userLogin } from "./authSlide";
import handleLogin from "./workSaga";

export default function* authSaga() {
  yield takeLatest(userLogin.type, handleLogin);
}

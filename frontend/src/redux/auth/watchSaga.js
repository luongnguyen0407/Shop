import { takeLatest } from "redux-saga/effects";
import { connectStart, userLogin } from "./authSlide";
import { connectReLoad, handleLogin } from "./workSaga";

export default function* authSaga() {
  yield takeLatest(userLogin.type, handleLogin);
  yield takeLatest(connectStart.type, connectReLoad);
  // yield takeLatest(userRegister.type, connectReLoad);
}

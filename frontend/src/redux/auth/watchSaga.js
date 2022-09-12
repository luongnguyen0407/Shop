import { takeLatest } from "redux-saga/effects";
import { connectStart, userLogin, userLogOut } from "./authSlide";
import { connectReLoad, handleLogin, handleLogOut } from "./workSaga";

export default function* authSaga() {
  yield takeLatest(userLogin.type, handleLogin);
  yield takeLatest(connectStart.type, connectReLoad);
  yield takeLatest(userLogOut.type, handleLogOut);
}

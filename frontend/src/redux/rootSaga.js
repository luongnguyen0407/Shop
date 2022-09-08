import { all, fork } from "redux-saga/effects";
import authSaga from "./auth/watchSaga";

export default function* rootSaga() {
  yield all([fork(authSaga)]);
}

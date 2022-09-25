import { all, fork } from "redux-saga/effects";
import authSaga from "./auth/watchSaga";
import productSaga from "./product/watchSaga";

export default function* rootSaga() {
  yield all([fork(authSaga), fork(productSaga)]);
}

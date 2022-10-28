import { takeLatest } from "redux-saga/effects";
import { handleGetCategory, handleSearch } from "./handleProduct";
import { getCategory, searchProduct } from "./productSlide";

export default function* productSaga() {
  yield takeLatest(searchProduct.type, handleSearch);
  yield takeLatest(getCategory.type, handleGetCategory);
}

import { takeLatest } from "redux-saga/effects";
import { addProduct, getCategory, searchProduct } from "./productSlide";
import {
  handleAddNewProduct,
  handleGetCategory,
  handleSearch,
} from "./handleProduct";

export default function* productSaga() {
  yield takeLatest(searchProduct.type, handleSearch);
  yield takeLatest(getCategory.type, handleGetCategory);
  yield takeLatest(addProduct.type, handleAddNewProduct);
}

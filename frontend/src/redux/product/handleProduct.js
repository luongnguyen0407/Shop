import { all, call, put, select } from "redux-saga/effects";
import { setCategory, setLoading, setProduct } from "./productSlide";
import {
  addNewProduct,
  reqGetCategory,
  reqSearchProduct,
} from "./requestProduct";

export function* handleSearch({ payload }) {
  try {
    yield put(setLoading(true));
    const res = yield call(reqSearchProduct, payload);
    yield all([put(setProduct(res.productList)), put(setLoading(false))]);
  } catch (error) {
    console.log(error);
    yield put(setLoading(false));
  }
}

export function* handleGetCategory() {
  try {
    const res = yield call(reqGetCategory);
    yield all([put(setCategory(res.categoryList))]);
  } catch (error) {
    console.log(error);
  }
}

export function* handleAddNewProduct({ payload }) {
  try {
    const { accessToken } = yield select((state) => state.auth.curentUser);
    yield call(addNewProduct, payload, accessToken);
  } catch (error) {
    console.log(error);
  }
}

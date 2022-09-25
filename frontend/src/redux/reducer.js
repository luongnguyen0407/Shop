import { combineReducers } from "@reduxjs/toolkit";
import authSlide from "./auth/authSlide";
import productSlide from "./product/productSlide";

export const reducer = combineReducers({
  auth: authSlide,
  product: productSlide,
});

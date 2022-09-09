import { combineReducers } from "@reduxjs/toolkit";
import authSlide from "./auth/authSlide";

export const reducer = combineReducers({
  auth: authSlide,
});

import { createSlice } from "@reduxjs/toolkit";

const authSlide = createSlice({
  name: "auth",
  initialState: {
    curentUser: {},
    loading: false,
    authError: "",
    isLogin: false,
  },
  reducers: {
    setDataUser: (state, action) => ({
      ...state,
      curentUser: action.payload,
    }),
    userLogin: () => {},
    connectStart: () => {},
    userRegister: () => {},
    setLoading: (state, action) => ({
      ...state,
      loading: action.payload,
    }),
    setError: (state, action) => ({
      ...state,
      authError: action.payload,
    }),
    setLogin: (state, action) => ({
      ...state,
      isLogin: action.payload,
    }),
  },
});

export const {
  userLogin,
  setLoading,
  setDataUser,
  setError,
  connectStart,
  setLogin,
  userRegister,
} = authSlide.actions;
export default authSlide.reducer;

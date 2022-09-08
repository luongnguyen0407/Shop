import { createSlice } from "@reduxjs/toolkit";

const authSlide = createSlice({
  name: "auth",
  initialState: {
    curentUser: {},
    loading: false,
    authError: "",
  },
  reducers: {
    setDataUser: (state, action) => ({
      ...state,
      curentUser: action.payload,
    }),
    userLogin: () => {},
    setLoading: (state, action) => ({
      ...state,
      loading: action.payload,
    }),
    setError: (state, action) => ({
      ...state,
      authError: action.payload,
    }),
  },
});

export const { userLogin, setLoading, setDataUser, setError } =
  authSlide.actions;
export default authSlide.reducer;

import { createSlice } from "@reduxjs/toolkit";

const product = createSlice({
  name: "product",
  initialState: {
    listProduct: [],
    loading: false,
    listCategory: [],
  },
  reducers: {
    setProduct: (state, action) => ({
      ...state,
      listProduct: action.payload,
    }),
    setCategory: (state, action) => ({
      ...state,
      listCategory: action.payload,
    }),
    searchProduct: () => {},
    getCategory: () => {},
    setLoading: (state, action) => ({
      ...state,
      loading: action.payload,
    }),
  },
});

export const {
  setProduct,
  searchProduct,
  getCategory,
  setCategory,
  setLoading,
  setStatus,
  addProduct,
} = product.actions;
export default product.reducer;

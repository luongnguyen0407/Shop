import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./reducer";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer,
  middleware: (gDM) => gDM({}).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

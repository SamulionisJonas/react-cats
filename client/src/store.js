import "regenerator-runtime/runtime";
import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import logger from "redux-logger";
import storage from "redux-persist/lib/storage";
// Redux Slices imports
import catSlice from "./slices/catSlice";

const reducers = combineReducers({ catBreeds: catSlice });

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({ serializableCheck: false }).concat(logger),
});

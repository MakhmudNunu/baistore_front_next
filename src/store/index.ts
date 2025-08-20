import { configureStore } from "@reduxjs/toolkit";
import brandsReducer from "./slices/brandsSlice";
import categoriesReducer from "./slices/categoriesSlice"

export const store = configureStore({
  reducer: {
    brands: brandsReducer,
    categories: categoriesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

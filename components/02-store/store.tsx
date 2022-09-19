import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../01-Reducers/resturantSlice";

export const store = configureStore({
  reducer: {
    resturant: counterReducer,
  },
});

import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "./auth/studentSlice";

export const store = configureStore({
  reducer: {
    students: studentReducer,
  },
});
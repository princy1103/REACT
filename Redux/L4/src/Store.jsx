import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Features/counter/counterSlice";

export const Store = configureStore({
    reducer: {
        counter: counterReducer
    }
});

import { configureStore , createSlice } from "@reduxjs/toolkit";

const initialState={
  mode:"light"
}

export const themeSlice=createSlice({
    name:'theme',
    initialState,
    reducers:{
      light:(state , action) => {
        state.mode="light";
    },
      dark:(state) => {
        state.mode="dark";
    }
    }
})

export const {light , dark} = themeSlice.actions

export const store = configureStore({
  reducer:{
    theme:themeSlice.reducer
  }
})
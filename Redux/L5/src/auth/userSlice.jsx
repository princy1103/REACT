import { configureStore , createSlice } from "@reduxjs/toolkit";

const initialState={
    isAuthenticate:false,
    userInfo:null
}

export const userSlice=createSlice({
    name:'user',
    initialState,
    reducers:{
      login:(state , action) => {
      state.isAuthenticate = true,
      state.userInfo = action.payload
    },
      logout:(state) => {
      state.isAuthenticate = false,
      state.userInfo = null
    }
    }
})

export const {login , logout} = userSlice.actions

export const store = configureStore({
  reducer:{
    user:userSlice.reducer
  }
})
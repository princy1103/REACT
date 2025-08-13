import { createSlice } from "@reduxjs/toolkit";

const studentSlice = createSlice({
  name: "students",
  initialState: { list: [] },
  reducers: {
    addStudent: (state, action) => {
      state.list.push(action.payload);
    }
  }
});

export const { addStudent } = studentSlice.actions;
export default studentSlice.reducer;
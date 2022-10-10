import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    SET_CURRENT_USER: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});

export const { SET_CURRENT_USER } = userSlice.actions;

export default userSlice.reducer;

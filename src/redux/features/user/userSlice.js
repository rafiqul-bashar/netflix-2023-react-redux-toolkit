import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: JSON.parse(sessionStorage.getItem("user"))
    ? JSON.parse(sessionStorage.getItem("user"))
    : null,
};

const userSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    // reducer here
    loginUser: (state, action) => {
      state.user = action.payload;
      sessionStorage.setItem("user", JSON.stringify(action.payload));
    },
    logOutUser: (state) => {
      state.user = null;
      sessionStorage.clear();
    },
  },
});

export const { loginUser, logOutUser } = userSlice.actions;
export default userSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: JSON.parse(sessionStorage.getItem("user"))
    ? JSON.parse(sessionStorage.getItem("user"))
    : {},
  playlist: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // reducer here
    loginUser: (state, action) => {
      state.user = action.payload;
      sessionStorage.setItem("user", JSON.stringify(action.payload));
    },
    logOutUser: (state) => {
      state.user = {};
      sessionStorage.clear();
    },
    savePlayList: (state, action) => {
      state.playlist = action.payload;
    },
  },
});

export const { loginUser, logOutUser, savePlayList } = userSlice.actions;
export default userSlice.reducer;

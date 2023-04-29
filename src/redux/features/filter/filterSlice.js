import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchTerm: "",
  category: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    // reducer here
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    clearSearchTerm: (state) => {
      state.searchTerm = "";
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
  },
});

export const { setCategory, setSearchTerm, clearSearchTerm } =
  filterSlice.actions;
export default filterSlice.reducer;

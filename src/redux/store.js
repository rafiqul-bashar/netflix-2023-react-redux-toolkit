import { configureStore } from "@reduxjs/toolkit";

import userSlice from "./features/user/userSlice";
import { apiSlice } from "./features/apiSlice";
import filterSlice from "./features/filter/filterSlice";
const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: userSlice,
    filter: filterSlice,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(apiSlice.middleware),
});
export default store;

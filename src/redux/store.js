import { configureStore } from "@reduxjs/toolkit";

import userSlice from "./features/user/userSlice";
import { apiSlice } from "./features/apiSlice";
const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: userSlice,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(apiSlice.middleware),
});
export default store;

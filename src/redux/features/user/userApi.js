import { apiSlice } from "../apiSlice";
import { loginUser } from "./userSlice";
const baseUrl = import.meta.env.VITE_BACKEND_BASE_URL;
export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => ({
        url: `${baseUrl}/users/register`,
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          let data = result.data?.user;
          console.log(data);
          dispatch(loginUser(data));
        } catch (err) {
          // do nothing
          console.log(err);
        }
      },
    }),
    login: builder.mutation({
      query: (data) => ({
        url: `${baseUrl}/users/login`,
        method: "POST",
        body: data,
      }),

      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          let data = result.data?.user;
          dispatch(loginUser(data));
        } catch (err) {
          // do nothing
          console.log(err);
        }
      },
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;

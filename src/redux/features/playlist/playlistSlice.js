import { apiSlice } from "../apiSlice";
import { savePlayList } from "../user/userSlice";
const baseUrl = import.meta.env.VITE_BACKEND_BASE_URL;

export const playlistApi = apiSlice.injectEndpoints({
  tagTypes: ["Playlist"],
  endpoints: (builder) => ({
    // endpoints here

    getPlaylist: builder.query({
      query: (id) => {
        return `${baseUrl}/users/playlist/${id}`;
      },
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          let data = result.data?.playlist?.items;

          dispatch(savePlayList(data));
        } catch (err) {
          // do nothing
          console.log(err);
        }
      },
      keepUnusedDataFor: 360,
      providesTags: ["Playlist"],
    }),
    // mutations here
    addOrRemoveInPlaylist: builder.mutation({
      query: ({ id, data }) => ({
        url: `${baseUrl}/users/playlist/${id}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Playlist"],
    }),
  }),
});
export const { useGetPlaylistQuery, useAddOrRemoveInPlaylistMutation } =
  playlistApi;

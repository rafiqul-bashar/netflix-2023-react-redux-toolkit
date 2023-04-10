import { apiSlice } from "../apiSlice";

const API_KEY = import.meta.env.VITE_API_KEY;

export const movieApi = apiSlice.injectEndpoints({
  tagTypes: ["Movies"],
  endpoints: (builder) => ({
    // endpoints here
    getSingleMovie: builder.query({
      query: (id) => {
        return `/movie/${id}?api_key=${API_KEY}&language=en-US&append_to_response=videos`;
      },
      providesTags: ["Movies"],
      keepUnusedDataFor: 120,
    }),
    getTrendingMovies: builder.query({
      query: () => {
        return `/trending/all/week?api_key=${API_KEY}&language=en-US`;
      },
      keepUnusedDataFor: 360,
      providesTags: ["Movies"],
    }),

    getNetflixOriginalsMovies: builder.query({
      query: () => {
        return `/discover/tv?api_key=${API_KEY}&with_networks=123`;
      },
      keepUnusedDataFor: 360,
      providesTags: ["Movies"],
    }),
    getTopRatedMovies: builder.query({
      query: () => {
        return `/movie/top_rated?api_key=${API_KEY}&language=en-US`;
      },
      keepUnusedDataFor: 360,
      providesTags: ["Movies"],
    }),
    getActionMovies: builder.query({
      query: () => {
        return `/discover/movie?api_key=${API_KEY}&with_genres=28`;
      },
      keepUnusedDataFor: 360,
      providesTags: ["Movies"],
    }),
    getHorrorMovies: builder.query({
      query: () => {
        return `/discover/movie?api_key=${API_KEY}&with_genres=27`;
      },
      keepUnusedDataFor: 360,
      providesTags: ["Movies"],
    }),
    getComedyMovies: builder.query({
      query: () => {
        return `/discover/movie?api_key=${API_KEY}&with_genres=35`;
      },
      keepUnusedDataFor: 360,
      providesTags: ["Movies"],
    }),
    getRomanceMovies: builder.query({
      query: () => {
        return `/discover/movie?api_key=${API_KEY}&with_genres=10749`;
      },
      keepUnusedDataFor: 360,
      providesTags: ["Movies"],
    }),
    getDocumentaries: builder.query({
      query: () => {
        return `/discover/movie?api_key=${API_KEY}&with_genres=99`;
      },
      keepUnusedDataFor: 360,
      providesTags: ["Movies"],
    }),
  }),
});
export const {
  useGetSingleMovieQuery,
  useGetTrendingMoviesQuery,
  useGetNetflixOriginalsMoviesQuery,
  useGetTopRatedMoviesQuery,
  useGetActionMoviesQuery,
  useGetHorrorMoviesQuery,
  useGetComedyMoviesQuery,
  useGetRomanceMoviesQuery,
  useGetDocumentariesQuery,
} = movieApi;

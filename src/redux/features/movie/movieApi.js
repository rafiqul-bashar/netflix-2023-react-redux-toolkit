import { apiSlice } from "../apiSlice";

const API_KEY = import.meta.env.VITE_API_KEY;
const baseUrl = "https://api.themoviedb.org/3";

export const movieApi = apiSlice.injectEndpoints({
  tagTypes: ["Movies"],
  endpoints: (builder) => ({
    // endpoints here
    getSingleMovie: builder.query({
      query: (id) => {
        return `${baseUrl}/movie/${id}?api_key=${API_KEY}&language=en-US&append_to_response=videos`;
      },
      providesTags: ["Movies"],
      keepUnusedDataFor: 1200,
    }),
    getSearchedMovie: builder.query({
      query: (movie) => {
        return `${baseUrl}/search/movie?api_key=${API_KEY}&language=en-US&query=${movie}&page=1&include_adult=false`;
      },
      providesTags: ["Movies"],
      keepUnusedDataFor: 1200,
    }),
    getTrendingMovies: builder.query({
      query: () => {
        return `${baseUrl}/trending/all/week?api_key=${API_KEY}&language=en-US`;
      },
      keepUnusedDataFor: 1200,
      providesTags: ["Movies"],
    }),

    getNetflixOriginalsMovies: builder.query({
      query: () => {
        return `${baseUrl}/discover/tv?api_key=${API_KEY}&with_networks=123`;
      },
      keepUnusedDataFor: 1200,
      providesTags: ["Movies"],
    }),
    getTopRatedMovies: builder.query({
      query: () => {
        return `${baseUrl}/movie/top_rated?api_key=${API_KEY}&language=en-US`;
      },
      keepUnusedDataFor: 1200,
      providesTags: ["Movies"],
    }),
    getActionMovies: builder.query({
      query: () => {
        return `${baseUrl}/discover/movie?api_key=${API_KEY}&with_genres=28`;
      },
      keepUnusedDataFor: 1200,
      providesTags: ["Movies"],
    }),
    getHorrorMovies: builder.query({
      query: () => {
        return `${baseUrl}/discover/movie?api_key=${API_KEY}&with_genres=27`;
      },
      keepUnusedDataFor: 1200,
      providesTags: ["Movies"],
    }),
    getComedyMovies: builder.query({
      query: () => {
        return `${baseUrl}/discover/movie?api_key=${API_KEY}&with_genres=35`;
      },
      keepUnusedDataFor: 1200,
      providesTags: ["Movies"],
    }),
    getRomanceMovies: builder.query({
      query: () => {
        return `${baseUrl}/discover/movie?api_key=${API_KEY}&with_genres=10749`;
      },
      keepUnusedDataFor: 1200,
      providesTags: ["Movies"],
    }),
    getDocumentaries: builder.query({
      query: () => {
        return `${baseUrl}/discover/movie?api_key=${API_KEY}&with_genres=99`;
      },
      keepUnusedDataFor: 1200,
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
  useGetSearchedMovieQuery,
} = movieApi;

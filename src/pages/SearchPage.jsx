import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  useGetTrendingMoviesQuery,
  useGetNetflixOriginalsMoviesQuery,
  useGetTopRatedMoviesQuery,
  useGetActionMoviesQuery,
  useGetHorrorMoviesQuery,
  useGetComedyMoviesQuery,
  useGetRomanceMoviesQuery,
  useGetDocumentariesQuery,
  useGetSearchedMovieQuery,
} from "../redux/features/movie/movieApi";
import { Header, MovieCard } from "../components";
import { setSearchTerm } from "../redux/features/filter/filterSlice";
import { useNavigate } from "react-router-dom";

export default function SearchPage() {
  const { category, searchTerm } = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSearchTerm = (e) => {
    e.preventDefault();
    if (e.target[0].value === "") return;
    dispatch(setSearchTerm(e.target[0].value));
    navigate("/movies/search-results");
  };
  let data;
  let title;
  let isLoading;

  switch (category) {
    case searchTerm !== "":
      ({ data, isLoading } = useGetSearchedMovieQuery(searchTerm));
      title = `result for ${searchTerm}`;
      break;
    case "trending":
      ({ data, isLoading } = useGetTrendingMoviesQuery());
      title = "Trending Movies Now";
      break;
    case "actions":
      ({ data, isLoading } = useGetActionMoviesQuery());
      title = "Actions Movies ";

      break;
    case "topRated":
      ({ data, isLoading } = useGetTopRatedMoviesQuery());
      title = "Top Rated Movies ";

      break;
    case "netflixOriginals":
      ({ data, isLoading } = useGetNetflixOriginalsMoviesQuery());
      title = "Netflix Originals ";

      break;
    case "comedy":
      ({ data, isLoading } = useGetComedyMoviesQuery());
      title = "Comedy Movies";

      break;
    case "romance":
      ({ data, isLoading } = useGetRomanceMoviesQuery());
      title = "Romance Movies";

      break;
    case "documentaries":
      ({ data, isLoading } = useGetDocumentariesQuery());
      title = "Documentaries";
      break;
    case "horrors":
      ({ data, isLoading } = useGetHorrorMoviesQuery());
      title = "Horror Movies";
      break;
    // case searchTerm !== "":
    //   ({ data } = useGetSearchedMovieQuery(searchTerm));
    //   title = `result for ${searchTerm}`;
    //   break;
    default:
      ({ data, isLoading } = useGetTrendingMoviesQuery());
      title = "Trending Movies Now";
  }
  return (
    <div>
      <Header />

      <div className="py-2 my-4 container ">
        <form onSubmit={handleSearchTerm}>
          <input
            type="text"
            className="max-w-2xl p-1 focus:outline-none w-full my-2 bg-gray-400 "
          />{" "}
          <button type="submit" className="px-3 mx-2 text-white bg-red-600 p-1">
            Search
          </button>
        </form>
        <h2 className="font-semibold text-white text-xl tracking-wide">
          Showing {title}
        </h2>
      </div>
      <div className="grid md:grid-cols-4 gap-4 container">
        {!isLoading ? (
          data?.results?.map((movie) => (
            <MovieCard key={movie?.id} movie={movie} searchPage={true} />
          ))
        ) : (
          <div className="h-[40vh] flex items-center justify-center w-screen py-12">
            <h2 className="animate-pulse italic tracking-widest text-center text-white text-3xl">
              loading ....
            </h2>
          </div>
        )}
      </div>
    </div>
  );
}

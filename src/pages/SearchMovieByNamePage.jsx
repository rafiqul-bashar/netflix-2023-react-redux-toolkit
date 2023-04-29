import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetSearchedMovieQuery } from "../redux/features/movie/movieApi";
import { setSearchTerm } from "../redux/features/filter/filterSlice";
import { Header, MovieCard } from "../components";

export default function SearchMovieByNamePage() {
  const { category, searchTerm } = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const { data, isLoading } = useGetSearchedMovieQuery(searchTerm);
  const handleSearchTerm = (e) => {
    e.preventDefault();
    dispatch(setSearchTerm(e.target[0].value));
  };

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
          Showing results for {searchTerm}
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

import React from "react";
import Banner from "../components/home/Banner";
import { useGetSingleMovieQuery } from "../redux/features/movie/movieApi";
import { useParams } from "react-router-dom";
import { Header } from "../components";

export default function SingleMoviePage() {
  const { id } = useParams();
  const { data: movie } = useGetSingleMovieQuery(id);
  console.log(movie);
  return (
    <div className="h-screen overflow-y-auto">
      <Header />
      <Banner movie={movie} singleMoviePage={true} />
    </div>
  );
}

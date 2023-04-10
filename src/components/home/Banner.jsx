import React, { useEffect } from "react";
import { useGetTrendingMoviesQuery } from "../../redux/features/movie/movieApi";

export default function Banner({ movie = {} }) {
  let bgImage = `https://image.tmdb.org/t/p/w1280${movie?.backdrop_path}`;

  return (
    <div className="h-[50vh] md:h-[60vh] w-full  relative">
      <div className="object-contain ">
        <img
          src={`${bgImage}`}
          alt={movie?.title}
          className=" h-[60vh] md:h-[70vh] w-full"
        />
      </div>
      <div className="bg-black/60 absolute top-12 text-white w-full max-w-3xl ml-40 mt-40">
        <h2 className="text-3xl font-semibold">
          {movie?.title || movie?.name || movie?.original_title}
        </h2>
      </div>
    </div>
  );
}

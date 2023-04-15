import React from "react";
import { Link } from "react-router-dom";

export default function MovieCard({ movie = {} }) {
  const { title, id, backdrop_path, poster_path } = movie;
  const imageUrl = `https://image.tmdb.org/t/p/original${
    backdrop_path ? backdrop_path : poster_path
  }`;

  return (
    <Link to={`/movies/${id}`}>
      <div className="text-white  scale-95 hover:scale-105 transition-transform duration-300 ">
        <img
          src={imageUrl}
          alt={title}
          loading="lazy"
          className="h-[150px] md:h-[250px] w-full"
        />
        <h1 className="font-semibold tracking-wide my-2 text-sm md:text-xl">
          {" "}
          {movie?.title || movie?.name || movie?.original_title}
        </h1>
      </div>
    </Link>
  );
}

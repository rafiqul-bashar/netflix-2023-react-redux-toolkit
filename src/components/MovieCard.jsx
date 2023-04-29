import React from "react";
import { BsPlayFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function MovieCard({ movie = {}, searchPage = false }) {
  const { title, id, backdrop_path, poster_path } = movie;
  const imageUrl = `https://image.tmdb.org/t/p/original${
    backdrop_path ? backdrop_path : poster_path
  }`;
  return (
    <div className="group ">
      <div className="text-white scale-95  group-hover:scale-100 transition-transform duration-300 ">
        <div
          // className="relative"
          className={"h-[120px] md:h-[169px] object-contain mx-auto relative"}
        >
          <img
            src={imageUrl}
            alt={title}
            loading="lazy"
            className="object-contain w-full h-full "
          />
        </div>
        <h1
          className={
            searchPage
              ? "md:my-6 font-medium tracking-wide text-lg pl-4"
              : "font-semibold tracking-wide my-2 text-sm md:text-xl"
          }
        >
          {" "}
          {movie?.title || movie?.name || movie?.original_title}
        </h1>
        <Link to={`/movies/${id}`}>
          <div className="absolute top-0 w-full left-0  h-[120px] md:h-[169px] flex items-center justify-center bg-black/70 backdrop:bg-blend-darken text-white opacity-0 group-hover:opacity-90 transition-transform duration-250 ease-in">
            <BsPlayFill className="md:text-5xl" />{" "}
            <p className="md:text-2xl">Play</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

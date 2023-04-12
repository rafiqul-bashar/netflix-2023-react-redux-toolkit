import React, { useEffect } from "react";
import { BsPlayFill } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";

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
      <div className=" backdrop:bg-blend-darken bg-black/40 absolute top-0 text-white h-[60vh] md:h-[70vh] md:px-32 flex  items-end pb-16 p-4">
        <div>
          <div className="flex items-center space-x-4 text-white text-4xl font-semibold">
            <button className="space-x-3 flex items-center bg-black/40 px-3 py-1 rounded-md">
              <BsPlayFill /> <p className="text-2xl">Play</p>
            </button>

            <button className="space-x-3 flex items-center bg-black/40 px-3 py-1 rounded-md">
              <AiOutlinePlus /> <p className="text-2xl">My List</p>
            </button>
          </div>
          <h2 className="text-3xl font-semibold my-4">
            {movie?.title || movie?.name || movie?.original_title}
          </h2>
          <p className="text-xl">{movie?.overview}</p>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import Banner from "../components/home/Banner";
import { useGetSingleMovieQuery } from "../redux/features/movie/movieApi";
import { useParams } from "react-router-dom";
import { Header, VideoPlayer } from "../components";
import { AiFillPlusCircle } from "react-icons/ai";
import { BsFillBookmarkFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
  useAddOrRemoveInPlaylistMutation,
  useGetPlaylistQuery,
} from "../redux/features/playlist/playlistSlice";
import { savePlayList } from "../redux/features/user/userSlice";
let marr = [700391, 739405];
export default function SingleMoviePage() {
  const { id } = useParams();
  const { data: movie } = useGetSingleMovieQuery(id);
  const [trailer, setTrailer] = React.useState("");
  const [playing, setPlaying] = React.useState(true);
  const [listed, setListed] = React.useState(false);
  const { user, playlist = [] } = useSelector((state) => state.auth);
  const [addOrRemoveInPlaylist, { isLoading, error }] =
    useAddOrRemoveInPlaylistMutation();
  const { data } = useGetPlaylistQuery(user?._id);

  React.useEffect(() => {
    if (movie?.videos) {
      const index = movie?.videos?.results.findIndex(
        (element) => element.type === "Trailer"
      );
      setTrailer(movie?.videos?.results[index]?.key);
    }
  }, [movie]);
  // handle my list button]
  const dataToPut = {
    title: movie?.title,
    id: parseInt(id),
    poster_path: movie?.backdrop_path
      ? movie?.backdrop_path
      : movie?.poster_path,
  };
  const handleMylist = async () => {
    if (playlist.length === 0) {
      return addOrRemoveInPlaylist({
        id: user?._id,
        data: {
          items: [dataToPut],
          userId: user?._id,
        },
      });
    }
    if (playlist.length !== 0) {
      playlist?.map((item) => {
        if (item?.id === parseInt(id)) {
          return addOrRemoveInPlaylist({
            id: user?._id,
            data: {
              items: playlist.filter((el) => el.id !== parseInt(id)),
              userId: user?._id,
            },
          });
        } else {
          let data = [...playlist, dataToPut];
          return addOrRemoveInPlaylist({
            id: user?._id,
            data: {
              items: data,
              userId: user?._id,
            },
          });
        }
      });
    }
  };
  const checkIfInPlaylist = () => {
    // playlist?.map((el) => console.log({ movie: el?.id, url: parseInt(id) }));
    playlist?.map((item) => {
      if (item?.id === parseInt(id)) {
        setListed(true);
      } else {
        // console.log(false);
        setListed(false);
      }
    });
  };
  React.useEffect(() => {
    checkIfInPlaylist();
  }, [playlist, id]);
  console.log(playlist, id);
  return (
    <div className="h-screen overflow-y-auto">
      <Header />
      {playing ? (
        <VideoPlayer trailer={trailer} />
      ) : (
        <Banner
          movie={movie}
          singleMoviePage={true}
          playing={playing}
          setPlaying={setPlaying}
        />
      )}
      <div className=" details text-gray-200">
        <div className="items-start flex flex-col md:flex-row md:items-center">
          <img
            className="h-[180px] p-2 object-cover md:my-12 mx-auto w-full md:w-fit"
            src={`https://image.tmdb.org/t/p/w500${
              movie?.backdrop_path ? movie?.backdrop_path : movie?.poster_path
            }`}
            alt={movie?.title}
          />

          <div className="p-10 flex-1">
            <div className="flex flex-col md:flex-row items-start justify-between">
              <div>
                <h2 className="font-semibold text-3xl md:text-3xl">
                  {movie?.title}( {movie?.release_date?.split("-")[0]})
                </h2>
                <div className="flex  gap-8 md:gap-10 mt-4 ">
                  <p>{movie?.vote_average} Average Vote</p>

                  <a href={movie?.homepage} target="_blank">
                    <span className="underline">Go to homepage</span>
                  </a>
                </div>
                <div className="flex  gap-3 mb-4">
                  <span>Languages: </span>
                  {movie?.spoken_languages?.map((el, index) => (
                    <h2 className="text-base font-medium" key={index}>
                      {el?.name},
                    </h2>
                  ))}
                </div>
                <div className="flex my-2 gap-3">
                  {movie?.genres?.map((el, index) => (
                    <h2 className="tracking-wider font-medium" key={index}>
                      {el?.name}
                    </h2>
                  ))}
                </div>
                <h2 className="font-semibold italic text-gray-100 text-lg">
                  {movie?.tagline ? `"${movie?.tagline}"` : null}
                </h2>
              </div>
              <button
                disabled={isLoading}
                onClick={handleMylist}
                className="rounded-md w-full md:w-fit px-8 my-3 text-gray-800 py-2 bg-gray-200 hover:brightness-125 flex  items-center justify-center space-x-3 font-medium "
              >
                {!listed ? (
                  <>
                    <AiFillPlusCircle className="h-6 w-6" />{" "}
                    <span>
                      {" "}
                      {isLoading ? "Please Wait.." : "Add To My List"}
                    </span>
                  </>
                ) : (
                  <>
                    <BsFillBookmarkFill className="h-4 w-4" />{" "}
                    <span>Saved</span>
                  </>
                )}
              </button>
            </div>
            <h2 className="font-medium text-md text-lg smd:text-xl mt-4">
              Overview
            </h2>
            <p> {movie?.overview}</p>
            <br />
            <h4 className="font-medium tracking-tight"> Production houses</h4>
            <div className="grid grid-cols-2">
              {movie?.production_companies?.map((el, index) => (
                <div className="mt-4" key={index}>
                  <h2 className="text-sm font-semibold">{el?.name}</h2>
                  <h2 className="text-xs">{el?.origin_country}</h2>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { Header, MovieCard } from "../components";
import { useGetPlaylistQuery } from "../redux/features/playlist/playlistSlice";
import { useSelector } from "react-redux";

export default function Profile() {
  const { user, playlist } = useSelector((state) => state.auth);
  const { isLoading, error } = useGetPlaylistQuery(user?._id);

  return (
    <div>
      <Header />
      <div className="text-white container py-12">
        <div>
          <h2 className="text-xl">My Profile</h2>
          <div className="flex flex-col gap-4 py-12">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5xh1TEMCLzKUNP3G8GY7ID5eBpoVNLZjdpSY6NcjI5A&s"
              alt={user?.fullName}
              className="h-12 w-12"
            />
            <h3>Name: {user?.fullName}</h3>
            <h3>Email: {user?.email}</h3>
          </div>
        </div>
        <h2 className="text-xl">Saved List</h2>
        <section className="grid grid-cols-2  md:grid-cols-5 gap-4 ">
          {playlist?.map((movie) => (
            <MovieCard key={movie?.id} movie={movie} searchPage={true} />
          ))}
        </section>
      </div>
    </div>
  );
}

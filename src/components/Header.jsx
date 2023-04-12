import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logOutUser } from "../redux/features/user/userSlice";

export default function Header() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  return (
    <nav className="h-16 bg-black/50 text-white flex items-center px-4 py-2 ">
      <div className="w-full max-w-7xl flex items-center justify-between  mx-auto">
        <div className="flex items-center space-x-6 text-white">
          <Link to="/">
            <img src="/logo.png" alt="logo" className="h-8" />
          </Link>
          <div className="hidden md:flex items-center space-x-6 text-white">
            <Link to="/">Home</Link>
            <Link to="/">Trending</Link>
            <Link to="/">Tv Shows</Link>
            <Link to="/">Movies</Link>
            <Link to="/">Comedies</Link>
            <Link to="/">Romance</Link>
            <Link to="/">Documentaries</Link>
          </div>
        </div>
        {/* right side */}
        <div className="flex items-center space-x-3">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5xh1TEMCLzKUNP3G8GY7ID5eBpoVNLZjdpSY6NcjI5A&s"
            alt={user?.name}
            className="h-8 w-8"
          />
          <h2>{user?.name.split(" ")[0]}</h2>
          <button onClick={() => dispatch(logOutUser())} className="px-4 ">
            LogOut
          </button>
        </div>
      </div>
    </nav>
  );
}

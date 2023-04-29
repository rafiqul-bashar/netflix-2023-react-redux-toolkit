import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logOutUser } from "../redux/features/user/userSlice";
import { setCategory } from "../redux/features/filter/filterSlice";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
export default function Header() {
  const { user } = useSelector((state) => state.auth);
  const [mobileMenu, setMobileMenu] = useState(false);
  const dispatch = useDispatch();
  const handleSetFilter = (value) => {
    dispatch(setCategory(value));
  };
  return (
    <nav className="h-16 bg-black/50 text-white flex items-center px-4 py-2 ">
      <div className="w-full max-w-7xl flex items-center justify-between  mx-auto">
        <div className="flex items-center space-x-6 text-white">
          <Link to="/">
            <img src="/logo.png" alt="logo" className="h-8" />
          </Link>
          <div className="hidden md:flex items-center space-x-6 text-white">
            <Link to="/">Home</Link>
            <Link
              to="/browse-movies"
              onClick={() => handleSetFilter("trending")}
            >
              Trending
            </Link>
            <Link
              to="/browse-movies"
              onClick={() => handleSetFilter("topRated")}
            >
              Top Rated
            </Link>
            <Link
              to="/browse-movies"
              onClick={() => handleSetFilter("actions")}
            >
              Actions
            </Link>
            <Link
              to="/browse-movies"
              onClick={() => handleSetFilter("romance")}
            >
              Romance
            </Link>
            <Link
              to="/browse-movies"
              onClick={() => handleSetFilter("horrors")}
            >
              Horrors
            </Link>
            <Link
              to="/browse-movies"
              onClick={() => handleSetFilter("netflixOriginals")}
            >
              Originals
            </Link>
            <Link
              to="/browse-movies"
              onClick={() => handleSetFilter("documentaries")}
            >
              Documentaries
            </Link>
          </div>
        </div>
        {/* right side */}
        <div className="flex items-center space-x-3">
          <Link to="/my-profile">
            <div className="flex items-center space-x-2">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5xh1TEMCLzKUNP3G8GY7ID5eBpoVNLZjdpSY6NcjI5A&s"
                alt={user?.fullName}
                className="h-8 w-8 hidden md:inline-block"
              />
              <h2 className="hidden md:inline-block">
                {user?.fullName.split(" ")[0]}
              </h2>
            </div>
          </Link>
          <button
            onClick={() => dispatch(logOutUser())}
            className="px-4 hidden md:inline-block"
          >
            LogOut
          </button>
          <button>
            <AiOutlineMenu
              onClick={() => setMobileMenu(!mobileMenu)}
              className="w-10 h-10 md:hidden"
            />
          </button>
        </div>
      </div>
      {/* mobile Menu*/}

      {mobileMenu && (
        <div className="h-screen overflow-hidden bg-black/90 top-0 z-30 w-screen right-0 fixed bottom-0 md:hidden">
          <div className="w-[70vw] bg-black/60 h-screen right-0 absolute px-4 py-2">
            <div className="flex items-center justify-between w-full">
              <h2 className="font-medium text-lg">Browse Movies</h2>
              <RxCross1
                onClick={() => setMobileMenu(!mobileMenu)}
                className="w-10 h-10 ml-auto"
              />
            </div>
            <div className="flex flex-col items-center space-y-6 text-white text-left mt-2">
              <Link to="/">Home</Link>
              <Link
                to="/browse-movies"
                onClick={() => handleSetFilter("trending")}
              >
                Trending
              </Link>
              <Link
                to="/browse-movies"
                onClick={() => handleSetFilter("topRated")}
              >
                Top Rated
              </Link>
              <Link
                to="/browse-movies"
                onClick={() => handleSetFilter("actions")}
              >
                Actions
              </Link>
              <Link
                to="/browse-movies"
                onClick={() => handleSetFilter("romance")}
              >
                Romance
              </Link>
              <Link
                to="/browse-movies"
                onClick={() => handleSetFilter("horrors")}
              >
                Horrors
              </Link>
              <Link
                to="/browse-movies"
                onClick={() => handleSetFilter("netflixOriginals")}
              >
                Originals
              </Link>
              <Link
                to="/browse-movies"
                onClick={() => handleSetFilter("documentaries")}
              >
                Documentaries
              </Link>
            </div>
            <h2 className="font-medium mt-6">My Profile</h2>
            <Link to="/my-profile">
              <div className="flex items-center space-x-3 my-3">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5xh1TEMCLzKUNP3G8GY7ID5eBpoVNLZjdpSY6NcjI5A&s"
                  alt={user?.fullName}
                  className="h-8 w-8 "
                />
                <h2>{user?.fullName.split(" ")[0]}</h2>
              </div>
            </Link>
            <button
              onClick={() => dispatch(logOutUser())}
              className=" md:hidden -block"
            >
              LogOut
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

import React from "react";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="h-screen bg-[url('/not-found-bg.png')]  bg-cover bg-blend-darken">
      <nav className="h-[8vh] bg-black/80 p-4">
        <Link to="/">
          <img src="/logo.png" alt="logo" className="h-8" />
        </Link>
      </nav>
      <section className="h-[92vh] flex justify-center items-center text-white  backdrop-brightness-50 w-full">
        <div className="text-center  max-w-4xl mx-auto">
          <h1 className="font-bold text-7xl">Lost your way?</h1>
          <br />
          <br />
          <p className="text-3xl">
            Sorry, we can't find that page. You'll find lots to explore on the
            home page.{" "}
          </p>
          <br />
          <br />
          <Link
            to="/"
            className="px-6 py-3 bg-white text-black hover:opacity-90 text-lg font-semibold rounded-md"
          >
            Netflix Home
          </Link>
          <p className="text-xl before:content-['|'] before:h-2 before:text-red-600 before:w-2 before:mr-2 before:bg-red-600 mt-8">
            Error Code
            <span className="font-bold px-2">NSES-404</span>
          </p>
        </div>
      </section>
    </div>
  );
}

import React, { useEffect } from "react";
import { Header, HomeBanner } from "../components";
import { useGetTrendingMoviesQuery } from "../redux/features/movie/movieApi";

export default function HomePage() {
  const [movie, setMovie] = React.useState({});
  const { data: movies, isLoading } = useGetTrendingMoviesQuery();
  const setBannerMovie = async (movies) => {
    let item = await movies?.results[
      Math.floor(Math.random() * movies?.results?.length)
    ];
    setMovie(item);
  };

  useEffect(() => {
    setBannerMovie(movies);
  }, [movies]);
  return (
    <>
      <Header />
      <HomeBanner movie={movie} />
    </>
  );
}

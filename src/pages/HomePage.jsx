import React, { useEffect } from "react";
import { Header, HomeBanner, HomeSlider } from "../components";
import {
  useGetTrendingMoviesQuery,
  useGetNetflixOriginalsMoviesQuery,
  useGetTopRatedMoviesQuery,
  useGetActionMoviesQuery,
  useGetHorrorMoviesQuery,
  useGetComedyMoviesQuery,
  useGetRomanceMoviesQuery,
  useGetDocumentariesQuery,
} from "../redux/features/movie/movieApi";
export default function HomePage() {
  const [movie, setMovie] = React.useState({});
  const { data: trendingMovies } = useGetTrendingMoviesQuery();
  const { data: actionMovies } = useGetActionMoviesQuery();
  const { data: topRatedMovies } = useGetTopRatedMoviesQuery();
  const { data: netflixOriginals } = useGetNetflixOriginalsMoviesQuery();
  const { data: comedyMovies } = useGetComedyMoviesQuery();
  const { data: romanceMovies } = useGetRomanceMoviesQuery();
  const { data: documentaries } = useGetDocumentariesQuery();

  const setBannerMovie = async (movies) => {
    let item = await movies?.results[
      Math.floor(Math.random() * movies?.results?.length)
    ];
    setMovie(item);
  };

  useEffect(() => {
    setBannerMovie(trendingMovies);
  }, [trendingMovies]);
  return (
    <div className="h-screen overflow-y-auto">
      <Header />
      <HomeBanner movie={movie} />
      <div className="flex flex-col h-full max-w-7xl mx-auto container space-y-4">
        <HomeSlider title="Trending Now" movies={trendingMovies?.results} />
        <HomeSlider title="Action Movies" movies={actionMovies?.results} />
        <HomeSlider title="Top Rated Movies" movies={topRatedMovies?.results} />
        <HomeSlider
          title="Netflix Originals"
          movies={netflixOriginals?.results}
        />
        <HomeSlider title="Comedy Movies" movies={comedyMovies?.results} />
        <HomeSlider title="Romance Movies" movies={romanceMovies?.results} />
        <HomeSlider title="Documentaries" movies={documentaries?.results} />
      </div>
    </div>
  );
}

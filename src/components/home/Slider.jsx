import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";

import MovieCard from "../MovieCard";
export default function Slider({ title = "loading", movies = [] }) {
  //   console.log(movies);
  const windowSize = useRef([window.innerWidth]);
  const [largeScreen, setLargeScreen] = React.useState(false);
  React.useEffect(() => {
    if (windowSize.current[0] >= 768) {
      setLargeScreen(true);
    }
  }, [windowSize.current[0]]);

  return (
    <div>
      <h2 className="my-6 font-semibold tracking-wide text-white text-xl md:text-2xl">
        {title}
      </h2>
      <Swiper
        spaceBetween={largeScreen ? 40 : 10}
        slidesPerView={largeScreen ? 4 : 2}
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        navigation={largeScreen ? true : false}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
      >
        {movies?.map((el) => (
          <SwiperSlide className="h-56" key={el?.id}>
            <MovieCard movie={el} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

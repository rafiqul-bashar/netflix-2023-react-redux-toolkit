import React from "react";
import ReactPlayer from "react-player";

export default function VideoPlayer({ trailer = "" }) {
  return (
    <div className="h-[60vh] md:h-[70vh] w-full ">
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${trailer}`}
        width="100%"
        height="100%"
        // style={{ position: "absolute", top: "0", left: "0" }}
        controls={true}
        playing
      />
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { showControls, hideControls, handleClick } from "../utils/handleVideo";
import getWindowWidth from "../utils/getWindowWidth";

export default function Video({ src, poster, id }: any) {
  return (
    <div>
      ?
      <video
        data-video
        id={id}
        className="transition duration-300"
        width={800}
        poster={poster}
        src={src}
        onMouseOver={(e) => showControls(e.target)}
        onMouseOut={(e) => hideControls(e.target)}
        onClick={(e) => handleClick(e.target)}
      ></video>
    </div>
  );
}

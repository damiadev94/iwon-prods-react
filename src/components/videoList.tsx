import React, { useEffect } from "react";
import Video from "./Video";

export default function videoList() {

    const handleClick = (e:any) => {
        const videos = document.querySelectorAll("video");
        videos.forEach(item => {
            if (item !== e.target) {
                item.pause()
            } else {
                return
            }
        })
    }

    useEffect(() => {
      document.addEventListener("click", (e) => handleClick(e))

    return document.removeEventListener("click", handleClick)
  }, []);

  return (
    <div className="mb-10 grid grid-cols-1 gap-10">
      <div className="col-span-1 flex justify-center">
        <Video
          id="1"
          src="/videos/antes-27.mp4"
          poster="/images/poster-27.jpeg"
        />
      </div>
      <div className="col-span-1 flex justify-center">
        <Video
          id="2"
          src="/videos/hero-video.mp4"
          poster="/images/poster-400.jpeg"
        />
      </div>
      <div className="col-span-1 flex justify-center">
        <Video
          id="3"
          src="/videos/ensimota.mp4"
          poster="/images/poster-ensimota.jpeg"
        />
      </div>
      <div className="col-span-1 flex justify-center">
        <Video
          id="4"
          src="/videos/mi-puta.mp4"
          poster="images/poster-puta.jpg"
        />
      </div>
    </div>
  );
}

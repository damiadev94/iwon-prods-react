"use client";
import { useEffect, useState } from "react";
import Video from "../../components/Video";
import MainLayout from "../../layout/MainLayout";

export default function Producciones() {
  const [activeVideo, setActiveVideo] = useState("");

  useEffect(() => {
    const handleVideo = (e: any) => {
      console.log(e);
    };

    document.addEventListener("click", (e: any) => {
      handleVideo(e);
    });
  }, []);

  return (
    <MainLayout>
      <div className="flex w-full items-center justify-center xl:pt-[200px] xl:pb-[40px]">
        <div className="mt-[200px] w-full xl:my-0 xl:w-[1270px]">
          <h1 className="proxima-black mb-10 text-center text-4xl text-lighterGray xl:text-6xl">
            Nuestros Trabajos
          </h1>
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
          <div className="mx-auto h-[5px] w-[400px] translate-y-[40px] rounded-[50%] bg-lightGreen blur-md"></div>
        </div>
      </div>
    </MainLayout>
  );
}

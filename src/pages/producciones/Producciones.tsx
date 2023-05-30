"use client";
import { useEffect, useState } from "react";
import Video from "../../components/Video";
import MainLayout from "../../layout/MainLayout";
import VideoList from "../../components/videoList";

export default function Producciones() {
  const [activeVideo, setActiveVideo] = useState("");

  const handleVideo = (e: any) => {
    
  };

  document.addEventListener("click", (e: any) => {
    handleVideo(e);
  });

  return (
    <MainLayout>
      <div className="flex w-full items-center justify-center xl:pt-[200px] xl:pb-[40px]">
        <div className="mt-[200px] w-full xl:my-0 xl:w-[1270px]">
          <h1 className="proxima-black mb-10 text-center text-4xl text-lighterGray xl:text-6xl">
            Nuestros Trabajos
          </h1>
          <VideoList/>
          <div className="mx-auto h-[5px] w-[400px] translate-y-[40px] rounded-[50%] bg-lightGreen blur-md"></div>
        </div>
      </div>
    </MainLayout>
  );
}

import { useEffect, useState } from "react";
import MainLayout from "./layout/MainLayout";
import Hero from "./components/Hero";
import Features from "./components/Features";

function App() {
  const [video, setVideo] = useState("/videos/ensimota.mp4");

  useEffect(() => {
    innerWidth < 640
      ? setVideo("/videos/ensimota.mp4")
      : setVideo("/videos/trailer.mp4");
  }, []);

  return (
    <MainLayout bgColor="bg-transparent">
      <div className="flex flex-col">
        <div className="">
          <video
            className="fixed right-0 bottom-0 z-[-10] min-w-full scale-150 min-h-full md:flex"
            src={video}
            autoPlay
            muted
            loop
          ></video>
        </div>
        {/* hero */}
        <Hero />
        {/* producciones */}
        <div id="features">
          <Features />
        </div>
      </div>
    </MainLayout>
  );
}

export default App;

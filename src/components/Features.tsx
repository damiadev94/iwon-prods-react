import React, { useEffect, useState } from "react";
import { BsWhatsapp } from "react-icons/bs";

export default function Features() {
  const [isMobile, setIsMobile] = useState(Boolean);

  useEffect(() => {
    innerWidth < 640 ? setIsMobile(true) : setIsMobile(false);
  }, []);

  const linkWp = "https://wa.link/cmlous";

  return (
    <div
      id="features"
      className="relative flex h-screen w-full items-center justify-center bg-darkGray"
    >
      {/*################## LIGHTS ###########################*/}
      <div className="absolute right-[20%] top-[25%] hidden h-[400px] w-[10px] rounded-md bg-lightGreen shadow-[0_11px_29px_#5FFC7B] md:flex"></div>
      <div className="absolute left-[20%] top-[25%] hidden h-[400px] w-[10px] rounded-md bg-lightGreen shadow-[0_11px_29px_#5FFC7B] md:flex">
        <img src="images/trapecio.svg" alt="" />
      </div>
      <div className="mx-[200px] flex flex-col items-center justify-center">
        <h2 className="proxima-bold mb-6 text-center text-4xl text-lighterGray xl:text-6xl">
          <span>
            <span>Participá</span> {isMobile ? <br /> : null} En Nuestro Sorteo
          </span>{" "}
          <br />
          <span>
            {" "}
            De Videoclips En <br /> <span className="bg-gradient-to-r from-darkGreen via-lightGreen to-darkGreen bg-clip-text text-transparent">Calidad De Cine.</span>
          </span>
        </h2>
        <p className="proxima-light mb-6 text-center text-lg text-lightGray md:text-3xl">
          Hay Ganadores Todos Los Meses!
        </p>
        <div className="relative">
          <a
            href={`${linkWp}`}
            className={`proxima-bold group group relative my-[20px] flex w-max items-center gap-[20px] rounded-[40px] border-2 border-lightGreen bg-transparent px-[45px] py-[22.5px] text-lg text-lighterGray duration-[.2s] hover:shadow-[0_0_20px_#5FFC7B] md:text-xl`}
            target="_blank"
          >
            <div>
              <BsWhatsapp size={"28px"} color={"#f7f7f7"} />
            </div>
            <span className="text-lighterGray transition-all">
              QUIERO PARTICIPAR
            </span>
          </a>
        </div>
      </div>
      <div className="absolute bottom-0 h-[5px] w-[400px] rounded-[50%] bg-lightGreen blur-md"></div>
    </div>
  );
}

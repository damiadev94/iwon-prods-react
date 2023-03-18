import React from "react";
import { BsWhatsapp, BsInstagram, BsTiktok, BsYoutube } from "react-icons/bs";
import MainLayout from "../../layout/MainLayout";

export default function Contacto() {
  const linkWp = "https://wa.link/8la86r";

  return (
    <MainLayout>
      <div>
        <div className="flex h-screen w-full flex-col items-center justify-center">
          <div className="rounded-[30px] border-2 border-lightGreen py-10 px-16">
            <h1 className="proxima-black mb-14 text-6xl text-lighterGray">
              Contacto
            </h1>
            <div className="grid grid-cols-3 gap-16">
              <div className="flex items-center justify-center">
                <a
                  href="https://www.instagram.com/iwon.audiovisual/"
                  target={"_blank"}
                >
                  <BsInstagram size={"40px"} color={"#5FFC7B"} />
                </a>
              </div>
              <div className="flex items-center justify-center">
                <a href={`${linkWp}`} target={"_blank"}>
                  <BsWhatsapp size={"40px"} color={"#5FFC7B"} />
                </a>
              </div>
              <div className="flex items-center justify-center">
                <a href="https://www.youtube.com/" target={"_blank"}>
                  <BsYoutube size={"40px"} color={"#5FFC7B"} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center">
          <div className="absolute bottom-10 h-[5px] w-[400px] translate-y-[40px] rounded-[50%] bg-lightGreen blur-md"></div>
        </div>
      </div>
    </MainLayout>
  );
}

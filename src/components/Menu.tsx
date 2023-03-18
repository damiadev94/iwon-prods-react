"use client";
import React, { useEffect, useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import CrossMenu from "./CrossMenu";

export default function Menu({ isActive }: any) {
  return (
    <div
      id="menu"
      className={`fixed top-0 bottom-0 z-[1000] h-screen w-full bg-darkGray 
    ${
      isActive ? "menu-active" : "menu-hidden"
    } flex items-center justify-center transition-transform`}
    >
      <div className="absolute top-4 left-4">
        <CrossMenu />
      </div>
      <div className="relative flex flex-col items-center justify-center gap-10">
        <a className="proxima text-2xl text-lightGreen" href="/producciones">
          Nuestros Trabajos
        </a>
        <a className="proxima text-2xl text-lightGreen" href="/precios">
          Precios
        </a>
        <a className="proxima text-2xl text-lightGreen" href="/contacto">
          Contacto
        </a>
        <div className="absolute bottom-[-40%] md:top-[25%] h-[5px] w-[200px] rounded-md bg-lightGreen shadow-[0_11px_29px_#5FFC7B] xl:hidden"></div>
        <div className="absolute top-[-40%] md:top-[25%] h-[5px] w-[200px] rounded-md bg-lightGreen shadow-[0_11px_29px_#5FFC7B] xl:hidden"></div>
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import Menu from "./Menu";
import handleMenu from "../utils/handleMenu";

export default function CrossMenu({ isActive }: any) {

  return (
    <div>
      <button className="relative" onClick={() => {handleMenu("menu")}}>
        <div id="menu-close" className="absolute w-full h-full z-[1000]"></div>
        <IoMdClose style={{ color: "#f7f7f7", fontSize: "30px" }} />
      </button>
    </div>
  );
}

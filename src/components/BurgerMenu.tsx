import React, { useEffect, useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import Menu from "./Menu";
import handleMenu from "../utils/handleMenu"

export default function BurgerMenu() {

  return (
    <div>
      <button className="relative" onClick={() => {handleMenu("menu")}}>
        <div id="burger-menu" className="absolute z-[1000] h-full w-full"></div>
        <IoMdMenu style={{ color: "#f7f7f7", fontSize: "30px" }} />
      </button>
    </div>
  );
}

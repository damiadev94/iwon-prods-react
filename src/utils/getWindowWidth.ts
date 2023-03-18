import { useEffect } from "react";

export default function getWindowWidth() {
let width = 0;
  useEffect(() => {
    width = window.innerWidth;
  }, []);
  return width;
}


import { useEffect, useState } from "react";
import { IoMdMenu } from "react-icons/io";
import BurgerMenu from "./BurgerMenu";
import Menu from "./Menu";

export default function NavBar(props: any) {
  const [isNavVisible, setIsNavVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsNavVisible(true);
    }, 500);
  }, [isNavVisible]);

  return (
    <div
      className={`proxima absolute left-0 right-0
    mx-auto flex w-80 translate-y-[-100px] transform 
    items-center justify-between rounded-bl-[30px] rounded-br-[30px] bg-transparent 
    py-6 px-8 transition duration-[.5s] ease-out xl:w-[1275px]  ${
      isNavVisible ? "translate-y-[0]" : ""
    } border-b-2 border-b-lightGreen`}
    >
      <a href="/">
        <img src="/images/iwon-logo.svg" alt="image" width={80} height={0} />
      </a>
      <div>
        <div className={`flex xl:hidden`}>
          <BurgerMenu/>
        </div>
        <div className={`mx-[20px] hidden gap-10 text-[1.2rem] xl:flex`}>
          <a
            className="proxima tracking-widest text-lighterGray
          duration-300 hover:text-lightGreen"
            style={{ textShadow: "0 1px 10px rgba(0,0,0,0.5)" }}
            href="/producciones"
          >
            Producciones
          </a>
          <a
            className="proxima overflow-hidden
           tracking-widest text-lighterGray
         duration-300 hover:text-lightGreen"
            style={{ textShadow: "0 1px 10px rgba(0,0,0,0.5)" }}
            href="/precios"
          >
            Precios
          </a>
          <a
            className="proxima overflow-hidden tracking-widest text-lighterGray
          duration-300 hover:text-lightGreen"
            style={{ textShadow: "0 1px 10px rgba(0,0,0,0.5)" }}
            href="/contacto"
          >
            Contacto
          </a>
        </div>
      </div>
    </div>
  );
}

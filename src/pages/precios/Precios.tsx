"use client";
import React, { useEffect, useState } from "react";
import { BsInstagram, BsWhatsapp, BsCheckCircleFill } from "react-icons/bs";
import MainLayout from "../../layout/MainLayout";

const linkWp = "https://wa.link/8la86r";

export default function Precios() {
  return (
    <MainLayout>
      <div className="flex h-auto w-full flex-col items-center justify-center gap-10 pt-[200px]">
        {/*################## CONTAINER #########################*/}
        <div className="flex flex-col gap-10">
          <h1 className="proxima-black mb-10 text-center text-6xl text-lighterGray">
            Precios
          </h1>
          {/*################## CARDS #########################*/}
          <div className="grid w-[400px] grid-cols-1 gap-10 xl:w-[1270px] xl:grid-cols-3">
            {/*################## CARD #########################*/}
            <div
              data-card
              id="1"
              className="group col-span-1 min-h-[200px] rounded-md border-2 border-lightGreen transition-colors hover:bg-lightGreen"
            >
              <div className="flex h-full flex-col items-center justify-start p-4">
                <div className="row-span-1 mb-4 h-[120px]">
                  <h1 className="proxima-bold text-center text-4xl text-lighterGray transition-colors group-hover:text-darkGray">
                    One Shot
                  </h1>
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-xl text-lighterGray transition-colors group-hover:text-darkGray">
                      <del>$29.900</del>
                    </span>
                    <span className="text-4xl text-lighterGray transition-colors group-hover:text-darkGray">
                      $10.900
                    </span>
                  </div>
                </div>
                <div className="h-[400px] w-[270px]">
                  <div className="proxima-light text-start text-xl leading-10 text-lighterGray transition-colors group-hover:text-darkGray">
                    <div className="flex gap-8">
                      <div className="pt-2">
                        <BsCheckCircleFill className="fill-lightGreen transition-colors group-hover:fill-darkGray" />
                      </div>
                      Jornada De 1 hora
                    </div>
                    <div className="flex gap-8">
                      <div className="pt-2">
                        <BsCheckCircleFill className="fill-lightGreen transition-colors group-hover:fill-darkGray" />
                      </div>
                      1 Locación
                    </div>
                    <div className="flex gap-8">
                      <div className="pt-2">
                        <BsCheckCircleFill className="fill-lightGreen transition-colors group-hover:fill-darkGray" />
                      </div>
                      Entrega En 7 Días
                    </div>
                    <div className="flex gap-8">
                      <div className="pt-2">
                        <BsCheckCircleFill className="fill-lightGreen transition-colors group-hover:fill-darkGray" />
                      </div>
                      Incluye Trailer De Lanzamiento
                    </div>
                    <div className="flex gap-8">
                      <div className="pt-2">
                        <BsCheckCircleFill className="fill-lightGreen transition-colors group-hover:fill-darkGray" />
                      </div>
                      Ideal Para Lanzamientos Rápidos
                    </div>
                  </div>
                </div>
                <div className="mb-4 mt-10">
                  <a
                    href={`${linkWp}`}
                    className={`proxima-bold group group relative flex w-max items-center gap-[20px] rounded-[40px] border-2 border-lightGreen bg-darkGray px-[30px] py-[15px] text-lg text-lighterGray transition-colors duration-[.2s] md:text-xl`}
                    target="_blank"
                  >
                    <div>
                      <BsWhatsapp size={"28px"} color={"#f7f7f7"} />
                    </div>
                    <span className="text-lighterGray transition-all">
                      RESERVAR AHORA
                    </span>
                  </a>
                </div>
              </div>
            </div>
            {/*################## CARD #########################*/}
            <div
              data-card
              id="2"
              className="col-span-1 min-h-[400px] rounded-md border-2 border-lightGreen transition-colors hover:bg-lightGreen"
            >
              <div className="group flex h-full flex-col items-center justify-start p-4">
                <div className="row-span-1 mb-4 h-[120px] ">
                  <h1 className="proxima-bold text-center text-4xl text-lighterGray transition-colors group-hover:text-darkGray">
                    Videoclip
                  </h1>
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-xl text-lighterGray transition-colors group-hover:text-darkGray">
                      <del>$79.900</del>
                    </span>
                    <span className="text-4xl text-lighterGray transition-colors group-hover:text-darkGray">
                      $25.900
                    </span>
                  </div>
                </div>
                <div className="h-[400px] w-[270px]">
                  <div className="proxima-light text-start text-xl leading-10 text-lighterGray">
                    <div className="flex gap-8 transition-colors group-hover:text-darkGray">
                      <div className="pt-2">
                        <BsCheckCircleFill className="fill-lightGreen transition-colors group-hover:fill-darkGray" />
                      </div>
                      Jornada De 4 Horas
                    </div>
                    <div className="flex gap-8 transition-colors group-hover:text-darkGray">
                      <div className="pt-2">
                        <BsCheckCircleFill className="fill-lightGreen transition-colors group-hover:fill-darkGray" />
                      </div>
                      2 Locaciones
                    </div>
                    <div className="flex gap-8 transition-colors group-hover:text-darkGray">
                      <div className="pt-2">
                        <BsCheckCircleFill className="fill-lightGreen transition-colors group-hover:fill-darkGray" />
                      </div>
                      Entrega En 2 Semanas
                    </div>
                    <div className="flex gap-8 transition-colors group-hover:text-darkGray">
                      <div className="pt-2">
                        <BsCheckCircleFill className="fill-lightGreen transition-colors group-hover:fill-darkGray" />
                      </div>
                      Incluye Trailer De Lanzamiento
                    </div>
                    <div className="flex gap-8 transition-colors group-hover:text-darkGray">
                      <div className="pt-2">
                        <BsCheckCircleFill className="fill-lightGreen transition-colors group-hover:fill-darkGray" />
                      </div>
                      Incluye Iluminación Básica
                    </div>
                  </div>
                </div>
                <div className="mb-4 mt-10">
                  <a
                    href={`${linkWp}`}
                    className={`proxima-bold group group relative flex w-max items-center gap-[20px] rounded-[40px] border-2 border-lightGreen bg-darkGray px-[30px] py-[15px] text-lg text-lighterGray transition-colors duration-[.2s] md:text-xl`}
                    target="_blank"
                  >
                    <div>
                      <BsWhatsapp size={"28px"} color={"#f7f7f7"} />
                    </div>
                    <span className="text-lighterGray transition-all">
                      RESERVAR AHORA
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/*################## CARD #########################*/}
            <div
              data-card
              id="3"
              className="group col-span-1 min-h-[400px] rounded-md border-2 border-lightGreen transition-colors hover:bg-lightGreen"
            >
              <div className="flex h-full flex-col items-center justify-start p-4">
                <div className="row-span-1 mb-4 h-[120px]">
                  <h1 className="proxima-bold text-center text-4xl text-lighterGray transition-colors group-hover:text-darkGray">
                    Videoclip Avanzado
                  </h1>
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-xl text-lighterGray transition-colors group-hover:text-darkGray">
                      <del>$110.000</del>
                    </span>
                    <span className="text-4xl text-lighterGray transition-colors group-hover:text-darkGray">
                      $60.900
                    </span>
                  </div>
                </div>
                <div className="h-[400px] w-[270px]">
                  <div className="proxima-light flex flex-col text-start text-xl leading-10 text-lighterGray">
                    <div className="flex gap-8 transition-colors group-hover:text-darkGray">
                      <div className="pt-2">
                        <BsCheckCircleFill className="fill-lightGreen transition-colors group-hover:fill-darkGray" />
                      </div>
                      Jornada De 8 Horas
                    </div>
                    <div className="flex gap-8 transition-colors group-hover:text-darkGray">
                      <div className="pt-2">
                        <BsCheckCircleFill className="fill-lightGreen transition-colors group-hover:fill-darkGray" />
                      </div>
                      3 Locaciones
                    </div>
                    <div className="flex gap-8 transition-colors group-hover:text-darkGray">
                      <div className="pt-2">
                        <BsCheckCircleFill className="fill-lightGreen transition-colors group-hover:fill-darkGray" />
                      </div>
                      Entrega en 1 semana
                    </div>
                    <div className="flex gap-8 transition-colors group-hover:text-darkGray">
                      <div className="pt-2">
                        <BsCheckCircleFill className="fill-lightGreen transition-colors group-hover:fill-darkGray" />
                      </div>
                      Diferentes Lentes
                    </div>
                    <div className="flex gap-8 transition-colors group-hover:text-darkGray">
                      <div className="pt-2">
                        <BsCheckCircleFill className="fill-lightGreen transition-colors group-hover:fill-darkGray" />
                      </div>
                      Iluminación Profesional
                    </div>
                    <div className="flex gap-8 transition-colors group-hover:text-darkGray">
                      <div className="pt-2">
                        <BsCheckCircleFill className="fill-lightGreen transition-colors group-hover:fill-darkGray" />
                      </div>
                      Estabilizador
                    </div>
                    <div className="flex gap-8 transition-colors group-hover:text-darkGray">
                      <div className="pt-2">
                        <BsCheckCircleFill className="fill-lightGreen transition-colors group-hover:fill-darkGray" />
                      </div>
                      Incluye Fotos
                    </div>
                    <div className="flex gap-8 transition-colors group-hover:text-darkGray">
                      <div className="pt-2">
                        <BsCheckCircleFill className="fill-lightGreen transition-colors group-hover:fill-darkGray" />
                      </div>
                      Incluye Portada
                    </div>
                    <div className="flex gap-8 transition-colors group-hover:text-darkGray">
                      <div className="pt-2">
                        <BsCheckCircleFill className="fill-lightGreen transition-colors group-hover:fill-darkGray" />
                      </div>
                      Video Vertical Para Historia
                    </div>
                  </div>
                </div>
                <div className="mb-4 mt-10">
                  <a
                    href={`${linkWp}}`}
                    className={`proxima-bold group group relative flex w-max items-center gap-[20px] rounded-[40px] border-2 border-lightGreen bg-darkGray px-[30px] py-[15px] text-lg text-lighterGray transition-colors duration-[.2s] md:text-xl`}
                    target="_blank"
                  >
                    <div>
                      <BsWhatsapp size={"28px"} color={"#f7f7f7"} />
                    </div>
                    <span className="text-lighterGray transition-all">
                      RESERVAR AHORA
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto h-[5px] w-[400px] translate-y-[40px] rounded-[50%] bg-lightGreen shadow-[0_11px_29px_#5FFC7B]"></div>
        {/*################## PROMO SORTEO #########################*/}
        <div className="mt-16 flex flex-col gap-10">
          <h1 className="proxima-black text-center text-6xl text-lighterGray">
            Promoción Sorteo VideoClip
          </h1>
          <p className="proxima-light text-center text-2xl text-lighterGray">
            Entra a nuestro instagram y participa!
          </p>
          <div className="mb-4 flex justify-center">
            <a
              href="https://www.instagram.com/p/Cp6JZXNrtk5/"
              className={`proxima-bold group group relative flex w-max items-center gap-[20px] rounded-[40px] border-2 border-[#833AB4] bg-transparent px-[30px] py-[15px] text-lg text-lighterGray duration-[.2s] hover:shadow-[0_0_20px_#833AB4] md:text-xl`}
              target="_blank"
            >
              <div>
                <BsInstagram size={"28px"} color={"#f7f7f7"} />
              </div>
              <span className="text-lighterGray transition-all">
                Inscribirse
              </span>
            </a>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

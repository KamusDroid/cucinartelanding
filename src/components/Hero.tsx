"use client";
import Image from 'next/image'

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-linear-to-t from-sky-50 to-sky-900  dark:from-yellow-900  dark:to-sky-950 px-6 md:px-20">
      
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className=" text-black dark:text-yellow-400 mb-6 text-5xl font-extrabold">
          Descubre el arte de cocinar con pasión
        </h1>
        <p className="text-lg text-shadow-yellow-700 dark:text-amber-300">
          En Cucinarte transformamos ingredientes en experiencias inolvidables.
          Aprende, crea y deleita tu paladar con nuestras recetas y servicios.
        </p>
        <a
          href="#services"
          className="inline-block bg-sky-800 hover:bg-sky-900
                     dark:bg-sky-700 dark:hover:bg-sky-800
                     text-white dark:text-yellow-400 font-semibold px-8 py-3 rounded-lg transition mt-4 z-[0]"
        >
          Ver Servicios
        </a>
      </div>

      <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center z-[1]">
        <Image
          src="/image/eventogastronomico3.jpg"
          alt="Cocina y arte culinario"
          width={400}
          height={400}
          className="rounded-lg shadow-lg"
          priority
        />
      </div>

  {/* Imagen de fondo */}
  <div className="absolute inset-0 z-[0] pointer-events-none">
    <img
      src="/image/cucinartegold.png"
      alt="cucinarte logo"
      className="w-full h-full object-contain opacity-11"
    />
  </div>
    </section>
  )
}

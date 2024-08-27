"use client";
import Image from "next/image";
import { Fade } from "react-slideshow-image";

export default function Hero() {
  return (
    <section className="relative min-h-[250px]">
      <div className="absolute inset-x-0 bottom-0 z-10 flex h-full flex-col items-center justify-center bg-black/40 backdrop-blur-sm">
        <h1 className="text-center text-2xl text-white lg:text-3xl xl:text-5xl">
          Pesona Desa <br />
          Pasir Biru, Sumedang
        </h1>
      </div>
      <Fade canSwipe={false} infinite arrows={false} autoplay duration={3000}>
        <div className="h-[250px] w-full xl:h-[400px]">
          <Image
            src={"/unsplash/1.webp"}
            alt="pemandangan 1"
            width={1920}
            height={1080}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="h-[250px] w-full xl:h-[400px]">
          <Image
            src={"/unsplash/2.webp"}
            alt="pemandangan 2"
            width={1920}
            height={1080}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="h-[250px] w-full xl:h-[400px]">
          <Image
            src={"/unsplash/3.webp"}
            alt="pemandangan 3"
            width={1920}
            height={1080}
            className="h-full w-full object-cover"
          />
        </div>
      </Fade>
    </section>
  );
}

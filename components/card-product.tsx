"use client";
import { ICardProduct } from "@/lib/entities";
import Image from "next/image";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { Button } from "./ui/button";
import { IoClose } from "react-icons/io5";
import { useEffect, useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { Slide } from "react-slideshow-image";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

export default function CardProduct(ICardProduct: ICardProduct) {
  const [open, setOpen] = useState(false);
  const [images, setImage] = useState<string[]>([]);
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    setImage(ICardProduct.images);
    setSlideIndex(0);
  }, [ICardProduct]);

  useEffect(() => {
    if (!open) {
      setSlideIndex(0);
    }
  }, [open]);

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger className="w-[45%] sm:w-[30%] lg:w-[20%] xl:w-[15%]">
        <div className="flex h-[250px] w-full flex-col gap-3 rounded-lg border border-purple-200 bg-purple-400 bg-opacity-10 p-5 text-slate-700 duration-300 sm:h-[300px] xl:hover:cursor-pointer xl:hover:bg-purple-500 xl:hover:text-white">
          <div className="h-3/5">
            <Image
              src={ICardProduct.images[0]}
              alt="kripik-ubi-ungu"
              width={500}
              height={500}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex h-2/5 flex-col items-center justify-center gap-2">
            <h1 className="line-clamp-2 font-bold xl:text-lg">
              {ICardProduct.name}
            </h1>
            <p className="flex">
              Rp{ICardProduct.price[slideIndex].toLocaleString("id-ID")}
            </p>
          </div>
        </div>
      </DrawerTrigger>
      <DrawerContent className="h-[90%]">
        <div className="container h-full">
          <DrawerHeader className="sticky top-0 flex justify-between bg-white">
            <DrawerTitle className="text-xl font-bold">
              {ICardProduct.name}
            </DrawerTitle>
            <DrawerClose>
              <IoClose className="text-3xl text-red-500" />
            </DrawerClose>
          </DrawerHeader>

          <div className="flex h-[90%] flex-col gap-3 lg:justify-between">
            <div className="min-[320px]:h-[70%] min-[390px]:h-[80%] sm:h-[85%]">
              <div className="flex h-full w-full flex-col gap-5 overflow-y-auto sm:flex-row">
                <div className="flex h-[470px] w-full flex-col gap-5 lg:h-[600px] lg:w-1/2 xl:h-[350px] xl:w-[20%]">
                  <Slide
                    autoplay={false}
                    arrows={true}
                    transitionDuration={100}
                    infinite={false}
                    prevArrow={
                      <GrFormPrevious
                        className={`text-3xl text-white ${slideIndex === 0 && "hidden"}`}
                      />
                    }
                    nextArrow={
                      <GrFormNext
                        className={`text-3xl text-white ${slideIndex === images.length - 1 && "hidden"}`}
                      />
                    }
                    onChange={(_from, to) => {
                      setSlideIndex(to);
                    }}
                  >
                    {images.map((image, index) => (
                      <div key={index} className="h-full w-full object-cover">
                        <Image
                          src={image}
                          alt={ICardProduct.name}
                          width={500}
                          height={500}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ))}
                  </Slide>
                </div>

                <div className="mt-5 flex w-full flex-col gap-5 text-slate-700 sm:mt-0 sm:overflow-y-auto lg:w-1/2 xl:w-[55%]">
                  <div>
                    <h1 className="text-xl font-bold">{ICardProduct.name}</h1>
                    <h2 className="text-lg">
                      Rp{ICardProduct.price[slideIndex].toLocaleString("id-ID")}
                    </h2>
                  </div>

                  <div>
                    <h3 className="font-semibold">Detail Produk</h3>
                    <p className="whitespace-pre-wrap break-words lg:text-lg">
                      {ICardProduct.description}
                    </p>
                  </div>
                </div>
                <div className="hidden w-[20%] flex-col gap-5 xl:flex">
                  <div className="flex items-center gap-3">
                    <h1 className="font-bold">Beli Langsung</h1>
                    <FaCartShopping className="text-purple-500" />
                  </div>
                  <div className="flex flex-col gap-3">
                    <h1>
                      Nama :{" "}
                      <span className="font-semibold">{ICardProduct.name}</span>
                    </h1>
                    <h2>
                      Harga :{" "}
                      <span className="font-semibold">
                        {ICardProduct.price[slideIndex].toLocaleString("id-ID")}
                      </span>
                    </h2>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="w-[90%]">
                      <Button
                        onClick={() => {
                          window.open(
                            ICardProduct?.link ? ICardProduct?.link : "#",
                            ICardProduct.link ? "_blank" : "_self",
                          );
                        }}
                        className="w-full bg-orange-500 hover:bg-orange-600"
                      >
                        Shopee
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center gap-2 min-[320px]:h-[15%] min-[390px]:h-[12%] xl:hidden">
              <div className="flex items-center gap-3 lg:text-lg">
                <h1 className="font-bold">Beli Langsung</h1>
                <FaCartShopping className="text-purple-500" />
              </div>
              <div className="flex items-center justify-between gap-5">
                <div className="w-full">
                  <Button
                    onClick={() => {
                      window.open(
                        ICardProduct?.link ? ICardProduct?.link : "#",
                        ICardProduct.link ? "_blank" : "_self",
                      );
                    }}
                    className="w-full bg-orange-500 hover:bg-orange-600 lg:h-16 lg:text-lg"
                  >
                    Shopee
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

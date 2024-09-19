"use client";
import Image from "next/image";
import { Button } from "../components/ui/button";
import { FaBagShopping } from "react-icons/fa6";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();

  return (
    <section className="relative flex min-h-[250px] items-start bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-violet-400 via-violet-200 to-violet-50 pb-10 sm:items-center sm:pb-0">
      <div className="container flex flex-col-reverse items-center sm:flex-row">
        <div className="flex w-full flex-col justify-center gap-5 sm:w-1/2">
          <div className="flex flex-col gap-3 text-center sm:text-left">
            <h1 className="text-lg font-bold text-purple-600 sm:text-start sm:text-base lg:text-xl xl:text-2xl">
              Selamat datang di produk Kelompok Wanita Tani
              <br />
              Desa Pasir Biru 🪴
            </h1>
            <p className="text-sm text-slate-700 lg:text-lg xl:text-xl">
              Temukan berbagai produk lokal berkualitas langsung dari petani
              desa belanja sekarang dan dukung usaha lokal.
            </p>
          </div>
          <div className="flex w-full justify-center sm:justify-start">
            <Button
              onClick={() => router.push("/#products")}
              className="flex gap-3 bg-purple-500 text-white duration-300 hover:bg-purple-600"
            >
              <FaBagShopping />
              Belanja Sekarang
            </Button>
          </div>
        </div>
        <div className="grid w-full place-items-center sm:w-1/2 sm:place-items-end">
          <Image
            src={"/illustrations/farmers-market.webp"}
            alt="farmers market"
            width={500}
            height={500}
            className="h-40 w-40 object-cover sm:h-[25rem] sm:w-[25rem]"
          />
        </div>
      </div>
    </section>
  );
}

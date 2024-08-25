import Link from "next/link";
import { LuFacebook, LuInstagram, LuMail } from "react-icons/lu";

export default function Footer() {
  return (
    <footer className="mt-24 bg-emerald-500 text-white">
      <div className="container flex min-h-[250px] text-sm sm:text-base lg:text-lg">
        <div className="flex w-1/2 flex-col justify-between py-16">
          <h3>Pasir Biru, Kec. Rancakalong, Kab. Sumedang</h3>
          <h3>©️ {new Date().getFullYear()} - Desa Pasir Biru</h3>
        </div>
        <div className="flex w-1/2 flex-col items-end justify-between py-16">
          <div className="flex gap-3">
            <Link href={"/"}>Beranda</Link>
            <Link href={"/#products"}>Produk Desa</Link>
          </div>
          <div className="flex gap-3 text-xl">
            <LuFacebook />
            <LuInstagram />
            <LuMail />
          </div>
        </div>
      </div>
    </footer>
  );
}

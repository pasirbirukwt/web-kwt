import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href={"/"} className="flex items-center gap-3 hover:cursor-pointer">
      <Image
        src="/logo/pasir-biru.webp"
        alt="pasir biru"
        width={500}
        height={500}
        className="h-7 w-7 object-cover"
      />
      <div className="flex flex-col">
        <h1 className="font-bold text-slate-800">Produk KWT</h1>
        <h2 className="text-xs text-slate-600 xl:text-sm">
          Desa Pasir Biru, Sumedang
        </h2>
      </div>
    </Link>
  );
}

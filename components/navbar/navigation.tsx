import { Fragment } from "react";
import { IoHome } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import Link from "next/link";
import { MdHolidayVillage } from "react-icons/md";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { LuMenu } from "react-icons/lu";

export default function Navigation() {
  const nav = [
    {
      name: "Beranda",
      icon: <IoHome />,
      path: "/",
    },
    {
      name: "Produk Desa",
      icon: <FaCartShopping />,
      path: "/#products",
    },
    {
      name: "Tentang Desa",
      icon: <MdHolidayVillage />,
      path: "/about-village",
    },
  ];

  return (
    <Fragment>
      {/* Mobile */}
      <div className="flex items-center gap-5 md:hidden">
        <Popover>
          <PopoverTrigger asChild>
            <LuMenu className="text-xl text-emerald-500" />
          </PopoverTrigger>
          <PopoverContent className="relative right-2 w-40 p-0">
            <Link
              href="/#products"
              className="flex items-center justify-evenly py-2 text-emerald-500"
            >
              <FaCartShopping />
              <p>Produk Desa</p>
            </Link>
            <Link
              href="/about-village"
              className="flex items-center justify-evenly py-2 text-emerald-500"
            >
              <MdHolidayVillage />
              <p>Tentang Desa</p>
            </Link>
          </PopoverContent>
        </Popover>
      </div>

      {/* Desktop */}
      <div className="hidden items-center gap-3 md:flex">
        {nav.map((item) => (
          <Link
            href={item.path}
            key={item.name}
            className="flex items-center gap-2 rounded-full px-3 py-2 text-sm text-emerald-500 duration-300 hover:bg-emerald-100"
          >
            {item.icon}
            {item.name}
          </Link>
        ))}
      </div>
    </Fragment>
  );
}

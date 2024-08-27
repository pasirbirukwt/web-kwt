"use client";
import { Fragment, useState } from "react";
import { IoHome } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import Link from "next/link";
import { MdHolidayVillage } from "react-icons/md";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { LuMenu } from "react-icons/lu";
import { RiWhatsappFill } from "react-icons/ri";

export default function Navigation() {
  const [open, setOpen] = useState(false);

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
      name: "Kontak KWT",
      icon: <RiWhatsappFill />,
      path: "https://wa.me/6285317841677",
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
      <div className="flex items-center gap-5 lg:hidden">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger>
            <LuMenu className="text-xl text-emerald-500" />
          </PopoverTrigger>
          <PopoverContent className="relative right-2 w-40 p-0">
            {nav.map((item) => (
              <Link
                key={item.name}
                onClick={() => setOpen(false)}
                href={item.path}
                target={item.name === "Kontak KWT" ? "_blank" : "_self"}
                className="flex items-center gap-2 py-2 pl-4 text-emerald-500"
              >
                {item.icon}
                {item.name}
              </Link>
            ))}
          </PopoverContent>
        </Popover>
      </div>

      {/* Desktop */}
      <div className="hidden items-center gap-3 lg:flex">
        {nav.map((item) => (
          <Link
            key={item.name}
            href={item.path}
            target={item.name === "Kontak KWT" ? "_blank" : "_self"}
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

"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { IoSearch } from "react-icons/io5";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import { products as productsData } from "@/lib/dummy";
import CardProduct from "@/components/card-product";

export default function Products() {
  const [products, setProducts] = useState(
    productsData.sort((a, b) => {
      if (a.price === b.price) {
        return a.name.localeCompare(b.name);
      }
      return a.price - b.price;
    }),
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
    filterProducts(value, sortOrder);
  };

  const handleSort = (value: string) => {
    setSortOrder(value);
    filterProducts(searchTerm, value);
  };

  const filterProducts = (searchTerm: string, sortOrder: string) => {
    let filteredProducts = productsData.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    if (sortOrder === "name") {
      filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOrder === "lower-price") {
      filteredProducts.sort((a, b) => {
        if (a.price === b.price) {
          return a.name.localeCompare(b.name);
        }
        return a.price - b.price;
      });
    } else if (sortOrder === "higher-price") {
      filteredProducts.sort((a, b) => {
        if (a.price === b.price) {
          return a.name.localeCompare(b.name);
        }
        return b.price - a.price;
      });
    }

    setProducts(filteredProducts);
  };

  return (
    <section className="container text-slate-700">
      <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
        <h1
          id="products"
          className="pt-20 text-2xl font-bold sm:text-lg md:text-xl"
        >
          Produk Desa
        </h1>
        <div className="flex w-full flex-col-reverse gap-5 sm:w-auto sm:flex-row sm:justify-end sm:pt-20">
          <div className="w-full sm:w-auto">
            <Select onValueChange={handleSort}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Urutkan" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="name">Nama</SelectItem>
                  <SelectItem value="lower-price">Harga Terendah</SelectItem>
                  <SelectItem value="higher-price">Harga Tertinggi</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="relative">
            <Input
              type="search"
              placeholder="Cari produk"
              className="pl-9"
              onChange={handleSearch}
            />
            <IoSearch className="absolute inset-y-0 left-3 top-[0.7rem] text-lg" />
          </div>
        </div>
      </div>
      <div className="mt-5 flex min-h-[250px] w-full flex-wrap items-start justify-between gap-5 sm:min-h-[600px] sm:justify-start sm:gap-7 md:gap-8 lg:min-h-[1000px] xl:min-h-[200px] xl:gap-10">
        {products.length === 0 ? (
          <div className="flex h-full w-full flex-col items-center justify-center gap-3">
            <Image
              alt="not-found"
              src="/illustrations/404.webp"
              width={500}
              height={500}
              className="h-32 w-32 object-cover"
            />
            <p>Produk tidak ditemukan</p>
          </div>
        ) : (
          products.map((product, index) => (
            <CardProduct key={index} {...product} />
          ))
        )}
      </div>
    </section>
  );
}

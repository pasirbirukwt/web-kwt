import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Metadata } from "next";
import { Fragment } from "react";

export const metadata: Metadata = {
  title: "Desa Pasir Biru",
  description:
    "Desa Pasir Biru merupakan salah satu desa yang terletak di kecamatan Rancakalong, Kabupaten Sumedang.",
};

export default function AboutVillageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Fragment>
      <Navbar />
      {children}
      <Footer />
    </Fragment>
  );
}

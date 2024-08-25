import { Fragment } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Hero from "./hero";
import Products from "./products";

export default function Home() {
  return (
    <Fragment>
      <Navbar />
      <main className="mb-10">
        <Hero />
        <Products />
      </main>
      <Footer />
    </Fragment>
  );
}

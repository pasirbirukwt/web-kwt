import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "react-slideshow-image/dist/styles.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Produk KWT - Desa Pasir Biru 🪴",
  description:
    "Temukan berbagai produk lokal berkualitas langsung dari petani desa belanja sekarang dan dukung usaha lokal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

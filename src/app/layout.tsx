import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import { NavbarDemo } from "@/components/header";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ['400' , '500' , '700'],
  preload: true , // يبدا يجهز الخط قبل ميعرض البيدج 
});

export const metadata: Metadata = {
  title: "IRIS",
  description: "Iris provides solutions for the medical field which bridge the gap between the need to contain costs and the importance of achieving the client’s objectives. We provide a very straightforward, logical, and consultative approach for the development and implementation of meeting initiatives unique to each individual event owner.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={roboto.className} 
      >
        <NavbarDemo/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}

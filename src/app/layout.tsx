import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { WEBSITE_DESCRIPTION, WEBSITE_NAME } from "../constants/about";
import { NavBar } from "../components/NavBar";
import Image from "next/image";
import background from "../../public/images/background.webp"
import { Footer } from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: WEBSITE_NAME,
  description: WEBSITE_DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white">
        <NavBar/>
        <div className="main-background">
          <Image 
            src={background} 
            alt={"Background"} 
            fill
            style={{objectFit: "cover"}}
            quality={100}
            priority
            />
        </div>
        {children}
        <Footer/>
      </body>
    </html>
  );
}



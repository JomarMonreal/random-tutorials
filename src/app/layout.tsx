import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { WEBSITE_DESCRIPTION, WEBSITE_NAME } from "../constants/about";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { Popup } from "../components/Popup";
import { MainBackground } from "../components/MainBackground";
import PopupProvider from "@/providers/PopupProvider";

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
        <PopupProvider>

          <Popup/>
            

          <NavBar/>

          <MainBackground/>

          {children}
          
          <Footer/>
        </PopupProvider>
      </body>
    </html>
  );
}





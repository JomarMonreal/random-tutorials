import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { WEBSITE_DESCRIPTION, WEBSITE_NAME } from "../constants/about";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { Popup } from "../components/Popup";
import { MainBackground } from "../components/MainBackground";
import PopupProvider from "@/providers/PopupProvider";
import { ThemeProvider } from "@mui/material";
import { defaultTheme } from "@/themes/themes";

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
      <ThemeProvider theme={defaultTheme}>
        <PopupProvider>
          <body className="bg-white">
              <Popup/>
              <NavBar/>
              <MainBackground/>
              {children}
              <Footer/>
          </body>
        </PopupProvider>
      </ThemeProvider>
    </html>
  );
}





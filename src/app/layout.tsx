import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { WEBSITE_DESCRIPTION, WEBSITE_NAME } from "../constants/about";
import { NavBar } from "../components/NavBar";

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
      <body className={inter.className}>
        <NavBar/>
        {children}
      </body>
    </html>
  );
}


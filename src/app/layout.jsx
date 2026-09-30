import { Inter, Newsreader } from "next/font/google";

import Navbar from "@/components/Navbar";
import BreakingNews from "@/components/BreakingNews";
import Footer from "@/components/Footer";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
});

export const metadata = {
  title: "The Wave News",
  description:
    "Delivering trusted news from Arunachal Pradesh and Northeast India.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${newsreader.variable}`}>
      <body className="font-sans min-h-screen flex flex-col">
        <Navbar />
        <BreakingNews />

        <main className="flex-1">{children}</main>

        <Footer />
      </body>
    </html>
  );
}

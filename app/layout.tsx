import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "./globals.css";

import Navigation from "@/app/_ui/Navigation";
import SmoothScroller from "@/app/_components/Lenis";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SEVALAND",
  description: "Film photography",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <Navigation />
        <main>
          <SmoothScroller />
          {children}
        </main>
      </body>
    </html>
  );
}

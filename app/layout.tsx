import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "./globals.css";

import Navigation from "@/app/_ui/Navigation";
import LenisScrollProvider from "@/app/_providers/lenis-provider";

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
          <LenisScrollProvider>{children}</LenisScrollProvider>
        </main>
      </body>
    </html>
  );
}

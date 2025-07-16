import type { Metadata } from "next";
import "./globals.css";

import { inter, merriweather, sourceCode } from "@/fonts/fonts";
import Navbar from "../components/navbar";
import Providers from "@/providers/providers";
export const metadata: Metadata = {
  title: "Dictionary",
  description: "English to English Dictionary",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${merriweather.variable} ${sourceCode.variable} antialiased`}
      >
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}

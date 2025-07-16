import { Inter, Noto_Serif, Source_Code_Pro } from "next/font/google";

export const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
export const notoSerif = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-noto",
});
export const sourceCode = Source_Code_Pro({
  subsets: ["latin"],
  variable: "--font-code",
});

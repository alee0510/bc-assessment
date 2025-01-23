import "@/styles/globals.css";

import { Poppins } from "next/font/google";
import { type Metadata } from "next";
import Header from "@/app/_lib/components/features/header";

// @font
const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  subsets: ["latin", "latin-ext"],
});

// @metadata
export const metadata: Metadata = {
  title: "hyperhire",
  description: "A platform for hiring and job hunting",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

// @layout
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>): React.ReactElement {
  return (
    <html lang="en" className={`${poppins.variable} bg-gray-200`}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}

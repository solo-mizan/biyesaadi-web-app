import type { Metadata } from "next";
import { inter } from "./ui/fonts";
import "./globals.css";
import Navbar from "@/components/navbar";



export const metadata: Metadata = {
  title: "Pairy",
  description: "Trusted matrimonial matchmaking site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

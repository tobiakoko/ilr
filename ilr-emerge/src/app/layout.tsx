import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "International Ladies Retreat",
  description: "ILR registration site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  );
}

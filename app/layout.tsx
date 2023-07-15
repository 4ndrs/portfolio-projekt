import type { Metadata } from "next";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

import { inter } from "@/fonts";

import styles from "@/components/Layout.module.css";

import "@/styles/globals.css";

export const metadata: Metadata = {
  themeColor: "#2d858d",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <body className={`${inter.className} ${styles.container}`}>
      <Navbar />
      {children}
      <Footer />
    </body>
  </html>
);

export default RootLayout;

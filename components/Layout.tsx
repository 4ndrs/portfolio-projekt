import { Inter } from "next/font/google";

import Navbar from "./Navbar";
import Footer from "./Footer";

import styles from "./Layout.module.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className={`${inter.className} ${styles.container}`}>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#2d858d" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Navbar />
    <main>{children}</main>
    <Footer />
  </div>
);

export default Layout;

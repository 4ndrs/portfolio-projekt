import { Inter } from "next/font/google";

import Navbar from "./Navbar";
import Footer from "./Footer";

import styles from "./Layout.module.css";

const inter = Inter({ subsets: ["latin"] });

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className={`${inter.className} ${styles.container}`}>
    <Navbar />
    <main>{children}</main>
    <Footer />
  </div>
);

export default Layout;

import { Inter } from "next/font/google";
import Navbar from "./Navbar";
import Footer from "./Footer";

const inter = Inter({ subsets: ["latin"] });

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className={inter.className}>
    <Navbar />
    <main>{children}</main>
    <Footer />
  </div>
);

export default Layout;

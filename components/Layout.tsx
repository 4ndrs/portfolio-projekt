import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className={inter.className}>
    <main>{children}</main>
  </div>
);

export default Layout;

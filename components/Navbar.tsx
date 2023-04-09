import Image from "next/image";
import Link from "next/link";

import styles from "./Navbar.module.css";

const Navbar = () => (
  <header className={styles.header}>
    <Link href="/" className={styles.homeLink}>
      <Image
        src="/favicon.ico"
        width={32}
        height={32}
        alt="Miku waving hi"
        className={styles.miku}
      />
      <span>4ndrs.dev</span>
    </Link>
    <menu className={styles.menu}>
      <li>
        <Link href="/#skills">Skills</Link>
      </li>
      <li>
        <Link href="/#projects">Projects</Link>
      </li>
      <li>
        <Link href="/#contact">Contact</Link>
      </li>
    </menu>
  </header>
);

export default Navbar;
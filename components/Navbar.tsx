import Image from "next/image";
import Link from "next/link";

import styles from "./Navbar.module.css";

const Navbar = () => (
  <header>
    <nav className={styles.navbar}>
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
          <Link href="/#skills" scroll={false}>
            Skills
          </Link>
        </li>
        <li>
          <Link href="/#projects" scroll={false}>
            Projects
          </Link>
        </li>
        <li>
          <Link href="/#contact" scroll={false}>
            Contact
          </Link>
        </li>
      </menu>
    </nav>
  </header>
);

export default Navbar;

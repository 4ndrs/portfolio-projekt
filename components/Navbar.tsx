"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import HamburgerSVG from "./HamburgerSVG";

import styles from "./Navbar.module.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
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

        <button
          aria-label="Open menu"
          className={styles.hamburger}
          onClick={() => setOpen(true)}
        >
          <HamburgerSVG />
        </button>

        <div
          className={`${styles.backdrop} ${open ? styles.open : ""}`}
          onClick={() => setOpen(false)}
        />

        <menu className={`${styles.menu} ${open ? styles.open : ""}`}>
          <button
            aria-label="Close menu"
            className={styles.hamburger}
            onClick={() => setOpen(false)}
          >
            <HamburgerSVG
              className={styles.burgerX}
              topClassName={styles.burgerTop}
              midClassName={styles.burgerMid}
              botClassName={styles.burgerBot}
            />
          </button>
          <li>
            <Link href="/#skills" onClick={() => setOpen(false)}>
              Skills
            </Link>
          </li>
          <li>
            <Link href="/#projects" onClick={() => setOpen(false)}>
              Projects
            </Link>
          </li>
          <li>
            <Link href="/#contact" onClick={() => setOpen(false)}>
              Contact
            </Link>
          </li>
        </menu>
      </nav>
    </header>
  );
};

export default Navbar;

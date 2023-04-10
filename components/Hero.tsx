import Link from "next/link";
import ChevronSVG from "./ChevronSVG";

import styles from "./Hero.module.css";

const Hero = () => (
  <section className={styles.container}>
    <h1 className={styles.text}>
      Hi, I&apos;m <span className={styles.highlight}>Andres</span>
      <br />A Software <span className={styles.highlight}>Developer</span>
    </h1>
    <Link href="/#skills" scroll={false} className={styles.cta}>
      scroll down
      <ChevronSVG width={65} height={24} />
    </Link>
  </section>
);

export default Hero;

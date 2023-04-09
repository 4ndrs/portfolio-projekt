import styles from "./Hero.module.css";

const Hero = () => (
  <section className={styles.container}>
    <h1 className={styles.text}>
      Hi, I&apos;m <span className={styles.highlight}>Andres</span>
      <br />A Software <span className={styles.highlight}>Developer</span>
    </h1>
  </section>
);

export default Hero;

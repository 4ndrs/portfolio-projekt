import styles from "./Footer.module.css";
import HeartSVG from "./HeartSVG";

const Footer = () => (
  <footer className={styles.footer}>
    <div>
      Made with <HeartSVG className={styles.heart} /> by me!
    </div>
    <div>
      Source code on{" "}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/4ndrs/portfolio-projekt"
        className={styles.github}
      >
        GitHub
      </a>
      .
    </div>
  </footer>
);

export default Footer;

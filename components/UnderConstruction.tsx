import Image from "next/image";

import styles from "./UnderConstruction.module.css";
import mikuCrying from "@/assets/miku_crying.jpg";

const UnderConstruction = () => (
  <section className={styles.container}>
    <h1 className={styles.text}>Under construction</h1>
    <Image
      src={mikuCrying}
      alt="Picture of Miku crying"
      placeholder="blur"
      className={styles.image}
    />
  </section>
);

export default UnderConstruction;

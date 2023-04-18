import OceanWaveSVG from "./OceanWaveSVG";
import styles from "./ProjectsHero.module.css";

const ProjectsHero = () => (
  <section>
    <div className={styles.container}>
      <h1 className={styles.title}>
        Projec<span className={styles.highlight}>ts</span>
      </h1>
    </div>
    <OceanWaveSVG className={styles.oceanWaves} />
  </section>
);

export default ProjectsHero;

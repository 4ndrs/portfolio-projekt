import Link from "next/link";

import styles from "./Skills.module.css";

const Skills = ({ skills }: { skills: string[] }) => (
  <section className={styles.container} id="skills">
    <h1 className={styles.title}>Skills</h1>
    <ul className={styles.skills}>
      {skills.map((skill) => (
        <li key={skill}>
          <Link
            href={`/projects?tag=${encodeURI(skill)}`}
            className={styles.skill}
          >
            {skill}
          </Link>
        </li>
      ))}
    </ul>
  </section>
);

export default Skills;
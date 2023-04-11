import Link from "next/link";
import ProjectCard from "./ProjectCard";

import styles from "./Projects.module.css";

import type { Project } from "@/lib/projects";

type ProjectToShow = Omit<Project, "frontPage"> & { frontPage: number };
type Props = { projects: Project[] };

const Projects = ({ projects }: Props) => {
  const projectsToShow = projects
    .filter(isProjectToShow)
    .sort((a, b) => a.frontPage - b.frontPage);

  if (projectsToShow.length !== 4) {
    throw new Error("Invalid number of projects to show");
  }

  const [projectOne, projectTwo, projectThree, projectFour] = projectsToShow;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.title} id="projects">
          Projects I have worked on
        </h1>

        <div className={styles.projects}>
          <ProjectCard featured project={projectOne} className={styles.one} />
          <ProjectCard
            layout="sdraiato"
            project={projectTwo}
            className={styles.two}
          />
          <ProjectCard
            noImage
            project={projectThree}
            className={styles.three}
          />
          <ProjectCard noImage project={projectFour} className={styles.four} />
        </div>

        <Link href="/projects" className={styles.more}>
          Show more projects »
        </Link>
      </div>
    </section>
  );
};

const isProjectToShow = (project: Project): project is ProjectToShow =>
  typeof project.frontPage === "number";

export default Projects;

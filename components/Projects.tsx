"use client";

import Link from "next/link";
import ProjectCard from "./ProjectCard";

import useMediaQuery from "@/hooks/useMediaQuery";
import styles from "./Projects.module.css";

import type { Project } from "@/lib/projects";

type ProjectToShow = Omit<Project, "frontPage"> & { frontPage: number };
type Props = { projects: Project[] };

const Projects = ({ projects }: Props) => {
  const smolScreen = useMediaQuery("(max-width: 660px)");
  const mediumScreen = useMediaQuery(
    "(min-width: 661px) and (max-width: 1055px)",
  );

  const projectsToShow = projects
    .filter(isProjectToShow)
    .sort((a, b) => a.frontPage - b.frontPage);

  if (projectsToShow.length !== 4) {
    throw new Error("Invalid number of projects to show");
  }

  const [projectOne, projectTwo, projectThree, projectFour] = projectsToShow;

  return (
    <section className={styles.section} id="projects">
      <div className={styles.container}>
        <h1 className="title">Projects I have worked on</h1>

        <div className={styles.projects}>
          <ProjectCard
            layout={mediumScreen ? "sdraiato" : "normal"}
            featured
            project={projectOne}
            className={styles.one}
          />
          <ProjectCard
            layout={smolScreen ? "normal" : "sdraiato"}
            project={projectTwo}
            className={styles.two}
          />
          <ProjectCard
            noImage
            layout="normal"
            project={projectThree}
            className={styles.three}
          />
          <ProjectCard
            noImage
            layout="normal"
            project={projectFour}
            className={styles.four}
          />
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

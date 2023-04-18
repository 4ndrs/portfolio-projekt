import Head from "next/head";
import ProjectsHero from "@/components/ProjectsHero";
import ProjectCard from "@/components/ProjectCard";

import { getAllProjects } from "@/lib/projects";

import styles from "@/styles/ProjectsPage.module.css";

export const getStaticProps = async () => {
  const projects = getAllProjects();

  return {
    props: {
      projects,
    },
  };
};

type Props = Awaited<ReturnType<typeof getStaticProps>>["props"];

const Projects = ({ projects }: Props) => {
  return (
    <>
      <Head>
        <title>Projects</title>
        <meta name="description" content="under construction" />
      </Head>
      <main>
        <ProjectsHero />
        <div className={styles.projects}>
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </main>
    </>
  );
};

export default Projects;

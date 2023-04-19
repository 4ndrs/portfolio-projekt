import { useRef, useState } from "react";

import Head from "next/head";
import ProjectsHero from "@/components/ProjectsHero";
import ProjectCard from "@/components/ProjectCard";
import SearchBar from "@/components/SearchBar";

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
  const [search, setSearch] = useState("");

  const searchInputRef = useRef<HTMLInputElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const handleSearchKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" && searchInputRef.current) {
      searchInputRef.current.blur();

      if (projectsRef.current) {
        projectsRef.current.scrollIntoView();
      }
    }
  };

  const filteredProjects = projects.filter(
    (project) =>
      project.title.toLowerCase().includes(search.toLowerCase()) ||
      project.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Head>
        <title>Projects</title>
        <meta name="description" content="under construction" />
      </Head>
      <main className="main">
        <ProjectsHero />

        <div className={styles.filterContainer}>
          <SearchBar
            ref={searchInputRef}
            aria-label="Search for projects"
            placeholder="Search for projects..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            onKeyDown={handleSearchKeyDown}
          />
        </div>

        <div ref={projectsRef} className={styles.projects}>
          {filteredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </main>
    </>
  );
};

export default Projects;

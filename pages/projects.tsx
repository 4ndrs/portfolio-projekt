import { useRef, useState } from "react";

import Head from "next/head";
import ProjectsHero from "@/components/ProjectsHero";
import ProjectCard from "@/components/ProjectCard";
import MikuSelect from "@/components/MikuSelect";
import SearchBar from "@/components/SearchBar";

import { getAllProjects } from "@/lib/projects";
import { getAllTags } from "@/utils";

import styles from "@/styles/ProjectsPage.module.css";

export const getStaticProps = async () => {
  const projects = getAllProjects();
  const tags = getAllTags(projects);

  return {
    props: {
      projects,
      tags,
    },
  };
};

type Props = Awaited<ReturnType<typeof getStaticProps>>["props"];

const Projects = ({ projects, tags }: Props) => {
  const [search, setSearch] = useState("");
  const [checkedTags, setCheckedTags] = useState<string[]>(["TypeScript"]);

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
      (project.title.toLowerCase().includes(search.toLowerCase()) ||
        project.description.toLowerCase().includes(search.toLowerCase())) &&
      checkedTags.every((tag) => project.tags.includes(tag))
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
          <MikuSelect
            tags={tags}
            checkedTags={checkedTags}
            className={styles.mikuSelect}
            onChange={(newCheckedTags) => setCheckedTags(newCheckedTags)}
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

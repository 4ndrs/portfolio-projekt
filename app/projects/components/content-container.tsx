"use client";

import { useEffect, useRef, useState } from "react";

import ProjectCard from "@/components/ProjectCard";
import MikuSelect from "@/components/MikuSelect";
import SearchBar from "@/components/SearchBar";

import styles from "@/styles/ProjectsPage.module.css";

import type { SearchBarElement } from "@/interfaces";
import type { Project } from "@/lib/projects";

const ContentContainer = ({
  tags,
  projects,
  query,
}: {
  tags: string[];
  projects: Project[];
  query: { [key: string]: string | string[] | undefined };
}) => {
  const [search, setSearch] = useState("");
  const [checkedTags, setCheckedTags] = useState<string[]>([]);

  const searchInputRef = useRef<SearchBarElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      "tag" in query &&
      typeof query.tag === "string" &&
      tags.includes(query.tag)
    ) {
      setCheckedTags([query.tag]);
    }
  }, [query, tags]);

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
      checkedTags.every((tag) => project.tags.includes(tag)),
  );
  return (
    <>
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
    </>
  );
};

export default ContentContainer;

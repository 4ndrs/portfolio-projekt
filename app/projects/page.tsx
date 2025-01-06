import ProjectsHero from "@/components/ProjectsHero";
import ContentContainer from "./components/content-container";

import { use } from "react";
import { getAllProjects } from "@/lib/projects";
import { getAllTags } from "@/utils";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "On this page all the projects I have worked on are listed.",
};

const projects = getAllProjects();
const tags = getAllTags(projects);

const Projects = (props: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const searchParams = use(props.searchParams);

  return (
    <main className="main">
      <ProjectsHero />

      <ContentContainer projects={projects} tags={tags} query={searchParams} />
    </main>
  );
};

export default Projects;

import ProjectsHero from "@/components/ProjectsHero";
import ContentContainer from "./components/content-container";

import { getAllProjects } from "@/lib/projects";
import { getAllTags } from "@/utils";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "On this page all the projects I have worked on are listed.",
};

const projects = getAllProjects();
const tags = getAllTags(projects);

const Projects = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  return (
    <main className="main">
      <ProjectsHero />

      <ContentContainer projects={projects} tags={tags} query={searchParams} />
    </main>
  );
};

export default Projects;

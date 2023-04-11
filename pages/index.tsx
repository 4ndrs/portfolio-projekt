import Head from "next/head";

import UnderConstruction from "@/components/UnderConstruction";

import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";

import { type Project, getAllProjects } from "@/lib/projects";

export const getStaticProps = async () => {
  const projects = getAllProjects();

  return {
    props: {
      projects,
    },
  };
};

type Props = Awaited<ReturnType<typeof getStaticProps>>["props"];

const Home = ({ projects }: Props) => {
  const skills = getSkills(projects);

  return (
    <>
      <Head>
        <title>4ndrs</title>
        <meta name="description" content="Under construction" />
      </Head>
      <Hero />
      <Skills skills={skills} />
      <Projects projects={projects} />
      <UnderConstruction />
    </>
  );
};

const getSkills = (projects: Project[]) => {
  const tagsMap: { [id: string]: number } = {};

  projects.forEach((project) => {
    project.tags.split(", ").forEach((tag) => {
      if (tag in tagsMap) {
        tagsMap[tag] += 1;
        return;
      }

      tagsMap[tag] = 0;
    });
  });

  const skills = Object.keys(tagsMap).sort((a, b) => tagsMap[b] - tagsMap[a]);

  return skills;
};

export default Home;

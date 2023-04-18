import Head from "next/head";

import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

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
  const skills = getAllTags(projects);

  return (
    <>
      <Head>
        <title>4ndrs</title>
        <meta
          name="description"
          content="Hi! This is my personal website where I list some of my projects. On this page you can find a brief overview of the stuff I have worked on, and a contact form to reach me out."
        />
      </Head>

      <Hero />
      <Skills skills={skills} />
      <Projects projects={projects} />
      <Contact />
    </>
  );
};

const getAllTags = (projects: Project[]) => {
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

  const tags = Object.keys(tagsMap).sort((a, b) => tagsMap[b] - tagsMap[a]);

  return tags;
};

export default Home;

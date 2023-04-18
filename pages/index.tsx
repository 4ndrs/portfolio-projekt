import Head from "next/head";

import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

import { getAllProjects } from "@/lib/projects";
import { getAllTags } from "@/utils";

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

export default Home;

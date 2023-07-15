import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

import { getAllProjects } from "@/lib/projects";
import { getAllTags } from "@/utils";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "4ndrs",
  description:
    "Hi! This is my personal website where I list some of my projects. On this page you can find a brief overview of the stuff I have worked on, and a contact form to reach me out.",
};

const projects = getAllProjects();
const skills = getAllTags(projects);

const Home = () => (
  <main className="main">
    <Hero />
    <Skills skills={skills} />
    <Projects projects={projects} />
    <Contact />
  </main>
);

export default Home;

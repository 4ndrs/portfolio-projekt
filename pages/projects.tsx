import Head from "next/head";

import UnderConstruction from "@/components/UnderConstruction";
import ProjectsHero from "@/components/ProjectsHero";

const Projects = () => (
  <>
    <Head>
      <title>Projects</title>
      <meta name="description" content="under construction" />
    </Head>
    <ProjectsHero />
    <UnderConstruction />
  </>
);

export default Projects;

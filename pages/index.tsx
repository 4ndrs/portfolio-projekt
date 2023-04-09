import Head from "next/head";

import UnderConstruction from "@/components/UnderConstruction";
import Hero from "@/components/Hero";

const Home = () => (
  <>
    <Head>
      <title>4ndrs</title>
      <meta name="description" content="Under construction" />
    </Head>
    <Hero />
    <UnderConstruction />
  </>
);

export default Home;

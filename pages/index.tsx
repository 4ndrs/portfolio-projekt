import Head from "next/head";

import UnderConstruction from "@/components/UnderConstruction";
import Hero from "@/components/Hero";

const Home = () => (
  <>
    <Head>
      <title>4ndrs</title>
      <meta name="description" content="Under construction" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Hero />
    <UnderConstruction />
  </>
);

export default Home;

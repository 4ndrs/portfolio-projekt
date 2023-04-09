import "@/styles/globals.css";
import Layout from "@/components/Layout";

import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);

export default App;

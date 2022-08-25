import type { NextPage } from "next";
import Head from "next/head";
import { ProjectsProvider } from "contexts/projects";
import ProjectList from "components/ProjectList";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>PAX</title>
        <meta name="description" content="Pax mobile" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ProjectsProvider>
          <ProjectList />
        </ProjectsProvider>
      </main>
    </div>
  );
};

export default Home;

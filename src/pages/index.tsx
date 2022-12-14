import type { NextPage } from "next";
import { HomeLayout } from "layouts";
import Head from "next/head";
import { ProjectsProvider } from "contexts/projects";
import ProjectList from "components/ProjectList";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>PAX</title>
        <meta name="description" content="Pax mobile" />
        <link rel="manifest" href="/manifest.json" />
      </Head>

      <main>
        <HomeLayout>
          <ProjectsProvider>
            <ProjectList />
          </ProjectsProvider>
        </HomeLayout>
      </main>
    </div>
  );
};

export default Home;

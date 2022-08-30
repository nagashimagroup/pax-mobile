import type { NextPage } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import { ProjectProvider } from "contexts/project";
import Project from "components/Project";
import { ProjectLayout } from "layouts";

const ProjectPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <Head>
        <title>PAX | Project</title>
      </Head>

      <main>
        <ProjectProvider id={id}>
          <ProjectLayout>
            <Project />
          </ProjectLayout>
        </ProjectProvider>
      </main>
    </div>
  );
};

export default ProjectPage;

import type { NextPage } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import { ProjectProvider } from "contexts/project";
import { SchedulesProvider } from "contexts/schedules";
import { ProductsProvider } from "contexts/products";
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

      <ProjectProvider id={id}>
        <SchedulesProvider
          variables={{ projectId: id?.toString() }}
          by="ProjectId"
        >
          <ProjectLayout>
            <Project />
          </ProjectLayout>
        </SchedulesProvider>
      </ProjectProvider>
    </div>
  );
};

export default ProjectPage;

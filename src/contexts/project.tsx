/* eslint-disable react-hooks/exhaustive-deps */
import { ReactNode, createContext, useContext, useEffect } from "react";
import type { Project } from "API";
import useQuery from "hooks/query";

interface ProjectContextValue {
  loading: boolean;
  project: Project | undefined;
}

interface ProjectContextProps {
  id: string | string[] | undefined;
  children: ReactNode;
}

const ProjectContext = createContext<ProjectContextValue>({
  project: undefined,
  loading: false,
});

export const ProjectProvider = ({ id, children }: ProjectContextProps) => {
  const { data, loading, refetch } = useQuery({
    query: "getProject",
    variables: {
      id,
    },
  });

  useEffect(() => {
    refetch({
      id,
    });
  }, [id]);

  return (
    <ProjectContext.Provider value={{ project: data, loading }}>
      {children}
    </ProjectContext.Provider>
  );
};

export const useProject = () => {
  const projectContext = useContext(ProjectContext);

  if (projectContext === undefined) {
    throw new Error("useProject must be within ProjectsProvider");
  }

  return projectContext;
};

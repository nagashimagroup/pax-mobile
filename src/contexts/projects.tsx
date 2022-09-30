/* eslint-disable react-hooks/exhaustive-deps */
import { ReactNode, createContext, useContext, useEffect } from "react";
import type { Project } from "API";
import useDatalist from "hooks/datalist";
import { useAuth } from "contexts/auth";

interface ProjectsContextValue {
  loading: boolean;
  projects: Project[];
  loadNext: () => void;
}

interface ProjectsContextProps {
  children: ReactNode;
}

const ProjectsContext = createContext<ProjectsContextValue>({
  projects: [],
  loading: false,
  loadNext: () => null,
});
export const ProjectsProvider = ({ children }: ProjectsContextProps) => {
  const { currentGroup } = useAuth();
  const { data, loading, loadNext, refetch } = useDatalist({
    query: "projectsByGroupId",
    variables: {
      groupId: currentGroup?.id,
      //filter: {
      //status: {
      //eq: "PACK",
      //},
      //},
    },
  });

  useEffect(() => {
    refetch({
      groupId: currentGroup?.id,
    });
  }, [currentGroup]);

  return (
    <ProjectsContext.Provider value={{ projects: data, loading, loadNext }}>
      {children}
    </ProjectsContext.Provider>
  );
};

export const useProjects = () => {
  const projectsContext = useContext(ProjectsContext);

  if (projectsContext === undefined) {
    throw new Error("useProjects must be within ProjectsProvider");
  }

  return projectsContext;
};

/* eslint-disable react-hooks/exhaustive-deps */
import { ReactNode, createContext, useContext, useEffect } from "react";
import type { Schedule } from "API";
import useQuery from "hooks/query";
import moment from "moment";

interface SchedulesContextValue {
  loading: boolean;
  schedules: Schedule[];
}

interface SchedulesContextProps {
  children: ReactNode;
  projectId: string;
}

function sortByDate(a: Schedule, b: Schedule) {
  return moment(a.packagingDate).isBefore(b.packagingDate) ? -1 : 1;
}

const SchedulesContext = createContext<SchedulesContextValue>({
  schedules: [],
  loading: false,
});

export const SchedulesProvider = ({
  projectId,
  children,
}: SchedulesContextProps) => {
  const { data, loading, refetch } = useQuery({
    query: "schedulesByProject",
    variables: {
      projectId,
    },
  });

  useEffect(() => {
    refetch({
      id: projectId,
    });
  }, [projectId]);

  return (
    <SchedulesContext.Provider
      value={{ schedules: data ? data.sort(sortByDate) : [], loading }}
    >
      {children}
    </SchedulesContext.Provider>
  );
};

export const useSchedules = () => {
  const schedulesContext = useContext(SchedulesContext);

  if (schedulesContext === undefined) {
    throw new Error("useSchedules must be within SchedulesProvider");
  }

  return schedulesContext;
};

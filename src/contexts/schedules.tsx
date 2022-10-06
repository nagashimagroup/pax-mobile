/* eslint-disable react-hooks/exhaustive-deps */
import { ReactNode, createContext, useContext, useEffect } from "react";
import type { Schedule } from "API";
import useDatalist from "hooks/datalist";
import moment from "moment";
import { GraphQLInput } from "hooks/datalist";

interface SchedulesContextValue {
  loading: boolean;
  schedules: Schedule[];
  update: (query: string, input: GraphQLInput) => void;
}

interface SchedulesContextProps {
  children: ReactNode;
  variables: { [key: string]: any };
  by?: "ProjectId" | "ScheduleId" | "PackageTypeId";
}

function sortByDate(a: Schedule, b: Schedule) {
  return moment(a.packagingDate).isBefore(b.packagingDate) ? -1 : 1;
}

const SchedulesContext = createContext<SchedulesContextValue>({
  schedules: [],
  loading: false,
  update: () => null,
});

export const SchedulesProvider = ({
  variables,
  children,
  by,
}: SchedulesContextProps) => {
  const { data, loading, refetch, update } = useDatalist({
    query: `schedulesBy${by || "ProjectId"}`,
    variables,
  });

  useEffect(() => {
    refetch(variables);
  }, [variables]);

  return (
    <SchedulesContext.Provider
      value={{ schedules: data ? data.sort(sortByDate) : [], loading, update }}
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

import { ReactNode, createContext, useContext, useState } from "react";
import Toast from "components/Toast";
import short from "short-uuid";

type Severity = "error" | "warning" | "info" | "success";

interface AddAlertProps {
  message: string;
  severity: Severity;
}

interface PaxAlert {
  id: string | short.SUUID;
  message: string;
  severity: Severity;
}

interface AlertsContextValue {
  alerts: PaxAlert[];
  addAlert: (newAlert: AddAlertProps) => void;
  removeAlert: (id: string) => void;
}

const AlertsContext = createContext<AlertsContextValue>({
  alerts: [],
  addAlert: () => null,
  removeAlert: () => null,
});
export const AlertsProvider = ({ children }: { children: ReactNode }) => {
  const [alerts, setAlert] = useState<PaxAlert[]>([]);

  const addAlert = ({ message, severity }: AddAlertProps) => {
    setAlert([...alerts, { id: short().new(), message, severity: severity }]);
  };

  const removeAlert = (id: string) => {
    setAlert(alerts.filter((a) => a.id !== id));
  };
  return (
    <AlertsContext.Provider value={{ alerts, addAlert, removeAlert }}>
      {alerts.map((a) => (
        <Toast
          key={a.id}
          open={true}
          onClose={() => removeAlert(a.id)}
          message={a.message}
          severity={a.severity}
        />
      ))}
      {children}
    </AlertsContext.Provider>
  );
};

export const useAlerts = () => {
  const alertsContext = useContext(AlertsContext);

  if (alertsContext === undefined) {
    throw new Error("useAlerts must be within AuthProvider");
  }

  return alertsContext;
};

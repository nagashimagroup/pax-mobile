import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { ReactNode, useEffect, useState } from "react";

interface TabPanelProps {
  children?: ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index } = props;

  return (
    <div className="relative" role="tabpanel" hidden={value !== index}>
      {value === index && children}
    </div>
  );
}

interface TabsProps {
  index: number;
  tabs: Tab[];
  onTabClick?: (index: number) => void;
}

interface Tab {
  title: string;
  content: ReactNode | ReactNode[] | string;
}

function TabsComponent({ tabs, index, onTabClick }: TabsProps) {
  const [value, setValue] = useState(index);
  const theme = useTheme();

  useEffect(() => {
    setValue(index);
  }, [index]);

  const handleChange = (newValue: number) => {
    if (onTabClick) {
      return onTabClick(newValue);
    }
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    if (onTabClick) {
      return onTabClick(index);
    }
    setValue(index);
  };

  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        width: "100%",
      }}
      className="h-full"
    >
      <AppBar position="static" sx={{ bgcolor: "white" }}>
        <Tabs
          value={value}
          onChange={(_, idx) => handleChange(idx)}
          indicatorColor="secondary"
          textColor="secondary"
          variant="fullWidth"
        >
          {tabs.map((tab, idx: number) => (
            <Tab key={`tabs__title__${tab.title}__${idx}`} label={tab.title} />
          ))}
        </Tabs>
      </AppBar>
      {tabs.map((tab, idx: number) => (
        <TabPanel
          key={`tabs__content__${tab.title}__${idx}`}
          value={value}
          index={idx}
          dir={theme.direction}
        >
          {tab.content}
        </TabPanel>
      ))}
    </Box>
  );
}

export default TabsComponent;

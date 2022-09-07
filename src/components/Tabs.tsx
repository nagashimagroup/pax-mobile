import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { ReactNode, SyntheticEvent, useEffect, useState } from "react";

interface TabPanelProps {
  children?: ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
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
        display: "flex",
        flexFlow: "column",
        height: "100%",
      }}
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
            <Tab
              key={`tabs__title__${tab.title}__${idx}`}
              label={tab.title}
              {...a11yProps(idx)}
            />
          ))}
        </Tabs>
      </AppBar>
      <SwipeableViews
        style={{ height: "100%" }}
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
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
      </SwipeableViews>
    </Box>
  );
}

export default TabsComponent;

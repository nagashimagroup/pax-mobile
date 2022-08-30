import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { ReactNode, SyntheticEvent, useState } from "react";

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
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
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
  tabs: Tab[];
}

interface Tab {
  title: string;
  content: ReactNode | ReactNode[] | string;
}

function TabsComponent({ tabs }: TabsProps) {
  const [value, setValue] = useState(0);
  const theme = useTheme();

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  return (
    <Box sx={{ bgcolor: "background.paper", width: "100%" }}>
      <AppBar position="static" sx={{ bgcolor: "white" }}>
        <Tabs
          value={value}
          onChange={handleChange}
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

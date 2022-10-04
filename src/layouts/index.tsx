import { HomeAppBar, ProjectAppBar, ProductAppBar } from "./AppBar";
import { HomeNavs, ProductNavs } from "layouts/Navigation";

import { ReactNode, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

interface LayoutProps {
  children: ReactNode | ReactNode[];
}

const mdTheme = createTheme();
const boxStyle = {
  backgroundColor: (theme: any) =>
    theme.palette.mode === "light"
      ? theme.palette.grey[100]
      : theme.palette.grey[900],
  height: "100%",
};

export function HomeLayout({ children }: LayoutProps) {
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box>
        <CssBaseline />
        <HomeAppBar open={open} toggleDrawer={toggleDrawer} />
        <HomeNavs open={open} toggleDrawer={toggleDrawer} />
        <Box component="main" sx={boxStyle}>
          <Toolbar />
          {children}
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export function ProjectLayout({ children }: LayoutProps) {
  return (
    <ThemeProvider theme={mdTheme}>
      <Box>
        <CssBaseline />
        <ProjectAppBar />
        <Box component="main" sx={boxStyle}>
          <Toolbar />
          {children}
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export function ProductLayout({ children }: LayoutProps) {
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box>
        <CssBaseline />
        <ProductAppBar open={open} toggleDrawer={toggleDrawer} />
        <ProductNavs open={open} toggleDrawer={toggleDrawer} />
        <Box component="main" sx={boxStyle}>
          <Toolbar />
          {children}
        </Box>
      </Box>
    </ThemeProvider>
  );
}

import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { MainListItems, SecondaryListItems } from "./NavItems";

interface NavigationProps {
  open?: boolean;
  toggleDrawer: () => void;
}

export function ProductNavs({ open, toggleDrawer }: NavigationProps) {
  return (
    <Drawer variant="temporary" open={open}>
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          px: [1],
        }}
      >
        <IconButton onClick={toggleDrawer}>
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <List component="nav">
        <MainListItems toggleDrawer={toggleDrawer} />
        <Divider sx={{ my: 1 }} />
        <SecondaryListItems toggleDrawer={toggleDrawer} />
      </List>
    </Drawer>
  );
}

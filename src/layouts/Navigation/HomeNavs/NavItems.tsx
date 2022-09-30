import { useAuth } from "contexts/auth";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import SignOutIcon from "@mui/icons-material/ExitToApp";
import CheckIcon from "@mui/icons-material/Check";

interface MenuListProps {
  toggleDrawer: () => void;
}

export const MainListItems = ({ toggleDrawer }: MenuListProps) => {
  const { logout } = useAuth();

  const handleSignOut = () => {
    logout();
    toggleDrawer();
  };

  return (
    <>
      <ListSubheader component="div" inset>
        メニュー
      </ListSubheader>
      <ListItemButton onClick={handleSignOut}>
        <ListItemIcon>
          <SignOutIcon />
        </ListItemIcon>
        <ListItemText primary="ログアウト" />
      </ListItemButton>
    </>
  );
};

export const SecondaryListItems = ({ toggleDrawer }: MenuListProps) => {
  const { user, currentGroup, setCurrentGroup } = useAuth();

  const handleGroupChange = (group: any) => {
    setCurrentGroup(group);
    toggleDrawer();
  };

  return (
    <>
      <ListSubheader component="div" inset>
        事業所選択
      </ListSubheader>
      {user?.groups.map((group) => (
        <ListItemButton key={group.id} onClick={() => handleGroupChange(group)}>
          <ListItemText primary={group.name} />
          {currentGroup?.id === group.id && <CheckIcon color="primary" />}
        </ListItemButton>
      ))}
    </>
  );
};

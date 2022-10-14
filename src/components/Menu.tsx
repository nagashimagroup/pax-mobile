import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";

interface Menu {
  icon?: any;
  label: string;
  onClick: () => void;
}

interface MenuProps {
  open: boolean;
  anchor: HTMLElement | null;
  menus: Menu[];
  onClose: () => void;
}

export default function BasicMenu({ open, anchor, menus, onClose }: MenuProps) {
  if (!open) return <div />;
  return (
    <Menu
      id="basic-menu"
      open={open}
      onClose={onClose}
      anchorEl={anchor}
      MenuListProps={{
        "aria-labelledby": "basic-button",
      }}
    >
      {menus.map((menu) => (
        <MenuItem
          key={menu.label}
          onClick={() => {
            menu.onClick();
            onClose();
          }}
        >
          {menu.icon && <ListItemIcon>{menu.icon}</ListItemIcon>}
          <ListItemText>{menu.label}</ListItemText>
        </MenuItem>
      ))}
    </Menu>
  );
}

import { useAuth } from "contexts/auth";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import SignOutIcon from "@mui/icons-material/ExitToApp";
import BallotIcon from "@mui/icons-material/Ballot";
import HomeIcon from "@mui/icons-material/Home";
import CheckIcon from "@mui/icons-material/Check";
import { useProduct } from "contexts/product";
import Link from "next/link";

interface MenuListProps {
  toggleDrawer: () => void;
}

export const MainListItems = ({ toggleDrawer }: MenuListProps) => {
  const { logout } = useAuth();
  const { product } = useProduct();

  const handleSignOut = () => {
    logout();
    toggleDrawer();
  };

  if (!product) return <div />;

  return (
    <>
      <ListSubheader component="div" inset>
        {product.name}
      </ListSubheader>
      <Link href={`/projects/${product.projectId}?status=PACK`}>
        <ListItemButton>
          <ListItemIcon>
            <BallotIcon />
          </ListItemIcon>
          <ListItemText primary="案件画面へ戻る" />
        </ListItemButton>
      </Link>
      <Link href="/">
        <ListItemButton>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="ホームに戻る" />
        </ListItemButton>
      </Link>
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
  const { product, currentCase } = useProduct();

  if (!product || !product.cases || product?.cases.length === 0) return <div />;

  return (
    <>
      <ListSubheader component="div" inset>
        ケース選択
      </ListSubheader>
      {product.cases.map(
        (cs) =>
          cs && (
            <Link
              key={cs.order}
              href={`/products/${product.id}?cs=${cs.order}${
                cs.phaseId ? `&phase=${cs.phaseId}` : ""
              }`}
            >
              <ListItemButton onClick={toggleDrawer}>
                <ListItemText
                  primary={cs.name || `${product.name}-${cs.order}`}
                />
                {currentCase?.order === cs.order && (
                  <CheckIcon color="primary" />
                )}
              </ListItemButton>
            </Link>
          )
      )}
    </>
  );
};

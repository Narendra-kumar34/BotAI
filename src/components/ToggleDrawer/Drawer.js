import * as React from "react";
import styles from "./Drawer.module.css";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import ProfilePic from "../../assets/profilePic.png";
import { ReactComponent as EditIcon } from "../../assets/editIcon.svg";

export default function SideDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        <ListItem disablePadding>
            <ListItemButton>
                <div className={styles.profilePic}><img src={ProfilePic} alt="ProfilePic" /></div>
                <ListItemText primary="New Chat" />
                <ListItemIcon><EditIcon /></ListItemIcon>
            </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
            <ListItemButton>
            <ListItemText primary="Past Conversations" />
            </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.headWrapper}>
        <Button onClick={toggleDrawer(true)}>
          <MenuIcon />
        </Button>
        <span className={styles.heading}>Bot AI</span>
      </div>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}

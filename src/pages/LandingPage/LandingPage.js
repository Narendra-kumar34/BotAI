import React from "react";
import styles from "./LandingPage.module.css";
import SideDrawer from "../../components/Drawer/Drawer";
import Grid from "@mui/material/Grid";
import ProfilePic from "../../assets/profilePic.png";
import { ReactComponent as EditIcon } from "../../assets/editIcon.svg";
import Home from "../../components/Home/Home";

export default function LandingPage() {
  return (
    <div style={{height: "100%"}}>
      <div style={{position: "absolute", width: "100%"}}><SideDrawer /></div>
      <Grid container spacing={0} sx={{height: "100%"}}>
        <Grid item xs={0} sm={2} >
            <div className={styles.sideWrapper}>
                <button className={styles.newChatButton}>
                    <div className={styles.profilePic}><img src={ProfilePic} alt="ProfilePic" /></div>
                    <span>New Chat</span>
                    <EditIcon />
                </button>
                <button className={styles.pastConvoButton}>
                    Past Conversations
                </button>
            </div>
        </Grid>
        <Grid item xs={12} sm={10}>
            <Home />
        </Grid>
      </Grid>
    </div>
  );
}

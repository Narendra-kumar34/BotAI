import React from "react";
//import styles from "./HistoryPage.module.css";
import SideDrawer from "../../components/ToggleDrawer/Drawer";
import Grid from "@mui/material/Grid";
import StaticDrawer from "../../components/StaticDrawer/StaticDrawer";

export default function HistoryPage() {
  return (
    <div style={{ height: "100%" }}>
      <div style={{ position: "absolute", width: "100%" }}>
        <SideDrawer />
      </div>
      <Grid container spacing={0} sx={{ height: "100%" }}>
        <Grid item xs={0} sm={2}>
          <StaticDrawer />
        </Grid>
        <Grid item xs={12} sm={10}>
            {/* History of chats */}
        </Grid>
      </Grid>
    </div>
  );
}

import React from "react";
import styles from "./Conversations.module.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import MessageBox from "../MessageBox/MessageBox";

export default function Conversations() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>
        <Typography variant="h4" sx={{ fontWeight: 700 }}>
          Bot AI
        </Typography>
      </div>
      <div className={styles.content}>
        <MessageBox />
      </div>
    </div>
  );
}

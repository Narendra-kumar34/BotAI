import React from "react";
import styles from "./Conversations.module.css";
import Typography from "@mui/material/Typography";
import MessageBox from "../MessageBox/MessageBox";
import { useState } from "react";
import Card from "../Card/Card";

export default function Conversations() {
  const[convoArr, setConvoArr] = useState([]);

  const handleAsk = (text) => {
    const currItem = {
      text: text,
      time: `${new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })}`,
      type: "user",
    };
    setConvoArr(prevArr => [...prevArr, currItem]);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>
        <Typography variant="h4" sx={{ fontWeight: 700 }}>
          Bot AI
        </Typography>
      </div>
      <div className={styles.content}>
        <div className={styles.cardsWrapper}>
          {convoArr.length!==0 && convoArr.map((chat, idx) => <Card key={idx} text={chat.text} time={chat.time} type={chat.type} />)}
        </div>
        <MessageBox handleAsk={handleAsk} />
      </div>
    </div>
  );
}

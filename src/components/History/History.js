import React from "react";
import styles from "./History.module.css";
import Typography from "@mui/material/Typography";
import MessageBox from "../MessageBox/MessageBox";
import HistoryCard from "../HistoryCard/HistoryCard";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

export default function History() {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const historyArr = JSON.parse(localStorage.getItem("conversations")) || [];

  if(historyArr.length > 1) {
    historyArr.sort((arr1, arr2) => {
      const date1 = new Date(arr1.date);
      const date2 = new Date(arr2.date);
      return date2 - date1;
    })
  }

  const handleAsk = (text) => {
    if(text === "") {
      enqueueSnackbar("Please enter something", { variant: "warning" });
    }
    else {
      navigate("/chat", { state: { inputText: text } });
    }
  };

  const handleSave = () => {
    enqueueSnackbar("Please ask something before saving", { variant: "warning" });
  }

  function formatDate(date) {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    const inputDate = new Date(date);
    inputDate.setHours(0, 0, 0, 0);

    if (inputDate.toDateString() === today.toDateString()) {
      return "Today's Chat";
    } else if (inputDate.toDateString() === yesterday.toDateString()) {
      return "Yesterday's Chat";
    } else {
      return inputDate.toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>
        <Typography
          sx={{ fontWeight: 400, fontSize: "28px", textAlign: "center" }}
        >
          Conversation History
        </Typography>
      </div>
      <div className={styles.cardsWrapper}>
        {historyArr.length !== 0 &&
          historyArr.map((conversation, idx) => {
            return (
              <div key={idx} className={styles.cardsSubWrapper}>
                <div className={styles.chatDate}>{formatDate(conversation.date)}</div>
                {conversation.conversationArr.map(
                  (chat, idx) =>
                    idx % 2 === 0 && (
                      <HistoryCard
                        key={idx}
                        userText={chat.text}
                        userTime={chat.time}
                        botText={conversation.conversationArr[idx + 1].text}
                        botTime={conversation.conversationArr[idx + 1].time}
                      />
                    )
                )}
              </div>
            );
          })}
      </div>
      <MessageBox handleAsk={handleAsk} handleSave={handleSave} />
    </div>
  );
}

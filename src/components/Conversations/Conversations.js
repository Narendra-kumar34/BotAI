import React from "react";
import styles from "./Conversations.module.css";
import Typography from "@mui/material/Typography";
import MessageBox from "../MessageBox/MessageBox";
import { useState, useEffect, useRef } from "react";
import Card from "../Card/Card";
import { responseData } from "../../api/api";

export default function Conversations({ initialText="" }) {
  let initialUserText = "";
  let initialBotResponse = "";
  
  const findResponse = (text) => {
    let responseText = "";
    responseData.forEach((data) => {
      if(data.question === text) {
        responseText = data.response;
      };
    });
    return responseText || "As an AI Language Model, I don’t have the details";
  }

  if(initialText) {
    initialUserText = {
      text: initialText,
      time: `${new Date().toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      })}`,
      type: "user",
    };
    initialBotResponse = {
      text: findResponse(initialText),
      time: `${new Date().toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      })}`,
      type: "bot",
    };
  }
  const [convoArr, setConvoArr] = useState(initialText === "" ? [] : [initialUserText, initialBotResponse]);
  const cardsWrapperRef = useRef(null);

  useEffect(() => {
    if (cardsWrapperRef.current) {
      cardsWrapperRef.current.scrollTop = cardsWrapperRef.current.scrollHeight;
    }
  }, [convoArr]);

  const handleAsk = (text) => {
    const currItem = {
      text: text,
      time: `${new Date().toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      })}`,
      type: "user",
    };
    setConvoArr((prevArr) => [...prevArr, currItem]);
    const currBotItem = {
      text: findResponse(text),
      time: `${new Date().toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      })}`,
      type: "bot",
    };
    setConvoArr((prevArr) => [...prevArr, currBotItem]);
  };

  const handleSave = () => {
    const currConvo = {
      date: `${new Date()}`,
      conversationArr: convoArr,
    }
    let allConversations = JSON.parse(localStorage.getItem("conversations")) || [];
    allConversations.push(currConvo);
    localStorage.setItem("conversations", JSON.stringify(allConversations));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>
        <Typography variant="h4" sx={{ fontWeight: 700 }}>
          Bot AI
        </Typography>
      </div>
      <div ref={cardsWrapperRef} className={styles.cardsWrapper}>
        {convoArr.length !== 0 &&
          convoArr.map((chat, idx) => (
            <Card
              key={idx}
              text={chat.text}
              time={chat.time}
              type={chat.type}
            />
          ))}
      </div>
      <MessageBox handleAsk={handleAsk} handleSave={handleSave} />
    </div>
  );
}

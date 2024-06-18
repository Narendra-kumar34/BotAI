import React from "react";
import styles from "./Conversations.module.css";
import Typography from "@mui/material/Typography";
import MessageBox from "../MessageBox/MessageBox";
import { useState, useEffect, useRef } from "react";
import Card from "../Card/Card";
// import { responseData } from "../../api/api";
import { useSnackbar } from "notistack";
const { GoogleGenerativeAI } = require("@google/generative-ai");

export default function Conversations({ initialText = "" }) {
  const { enqueueSnackbar } = useSnackbar();
  const googleAPIKey = "AIzaSyDrgUrvHzJbGXlZah8EoTJuBqcDFraGR5Q";
  const genAI = new GoogleGenerativeAI(googleAPIKey);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const findResponse = async (text) => {
    const result = await model.generateContent(text);
    const responseText = await result.response.text();
    return responseText || "As an AI Language Model, I don’t have the details";
  };

  const [convoArr, setConvoArr] = useState([]);
  const cardsWrapperRef = useRef(null);

  useEffect(() => {
    const initializeConversation = async () => {
      if (initialText) {
        const initialUserText = {
          text: initialText,
          time: `${new Date().toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
          })}`,
          type: "user",
        };

        const initialBotResponseText = await findResponse(initialText);
        const initialBotResponse = {
          text: initialBotResponseText,
          time: `${new Date().toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
          })}`,
          type: "bot",
        };

        setConvoArr([initialUserText, initialBotResponse]);
      }
    };

    initializeConversation();
  }, [initialText]);

  useEffect(() => {
    if (cardsWrapperRef.current) {
      cardsWrapperRef.current.scrollTop = cardsWrapperRef.current.scrollHeight;
    }
  }, [convoArr]);

  const handleAsk = async (text) => {
    if (text === "") {
      enqueueSnackbar("Please enter something", { variant: "warning" });
    } else {
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

      const currBotItemText = await findResponse(text);
      const currBotItem = {
        text: currBotItemText,
        time: `${new Date().toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        })}`,
        type: "bot",
      };
      setConvoArr((prevArr) => [...prevArr, currBotItem]);
    }
  };

  const handleSave = () => {
    const currConvo = {
      date: `${new Date()}`,
      conversationArr: convoArr,
    };
    let allConversations =
      JSON.parse(localStorage.getItem("conversations")) || [];
    allConversations.push(currConvo);
    localStorage.setItem("conversations", JSON.stringify(allConversations));
    enqueueSnackbar("Conversation saved!", { variant: "success" });
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
            <Card key={idx} text={chat.text} time={chat.time} type={chat.type} />
          ))}
      </div>
      <MessageBox handleAsk={handleAsk} handleSave={handleSave} />
    </div>
  );
}

import React from "react";
import styles from "./Card.module.css";
import Avatar from "../../assets/avatar.png";
import BotLogo from "../../assets/profilePic.png";

export default function Card({ text, time, type }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.profileImage}>
        <img src={type === "user" ? Avatar : BotLogo} alt="avatar" />
      </div>
      <div className={styles.content}>
        <div style={{ fontWeight: "700" }}>
          {type === "user" ? "You" : "Bot AI"}
        </div>
        <div>{text}</div>
        <div className={styles.voteWrapper}>{time}</div>
      </div>
    </div>
  );
}

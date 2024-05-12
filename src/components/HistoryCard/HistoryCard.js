import React from "react";
import styles from "./HistoryCard.module.css";
import Avatar from "../../assets/avatar.png";
import BotLogo from "../../assets/profilePic.png";

export default function HistoryCard({ userText, userTime, botText, botTime }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.subWrapper}>
        <div className={styles.profileImage}>
          <img src={Avatar} alt="avatar" />
        </div>
        <div className={styles.content}>
          <div style={{ fontWeight: "700" }}>{"You"}</div>
          <div>{userText}</div>
          <div className={styles.voteWrapper}>{userTime}</div>
        </div>
      </div>
      <div className={styles.subWrapper}>
        <div className={styles.profileImage}>
          <img src={BotLogo} alt="avatar" />
        </div>
        <div className={styles.content}>
          <div style={{ fontWeight: "700" }}>{"Bot AI"}</div>
          <div>{botText}</div>
          <div className={styles.voteWrapper}>{botTime}</div>
        </div>
      </div>
    </div>
  );
}

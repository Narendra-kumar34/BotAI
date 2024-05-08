import React from "react";
import styles from "./StaticDrawer.module.css";
import ProfilePic from "../../assets/profilePic.png";
import { ReactComponent as EditIcon } from "../../assets/editIcon.svg";

export default function StaticDrawer() {
  return (
    <div className={styles.sideWrapper}>
      <button className={styles.newChatButton}>
        <div className={styles.profilePic}>
          <img src={ProfilePic} alt="ProfilePic" />
        </div>
        <span>New Chat</span>
        <EditIcon />
      </button>
      <button className={styles.pastConvoButton}>Past Conversations</button>
    </div>
  );
}

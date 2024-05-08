import React from "react";
import styles from "./MessageBox.module.css";

export default function MessageBox() {
  return (
    <form className={styles.wrapper}>
      <input type="text" className={styles.inputField} />
      <input type="submit" value="Ask" className={styles.buttonStyle} />
      <button className={styles.buttonStyle}>Save</button>
    </form>
  );
}

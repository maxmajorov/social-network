import React from "react";
import classes from "./FriendMaxi.module.css";

function FriendMaxi() {
  return (
    <div className={classes.card}>
      <img
        className={classes.avatar}
        src="../../img/friend.png"
        alt="friend-name"
      ></img>
      <div className={classes.info}>
        <span className={classes.name}>Olga</span>
        <span className={classes.name}>Minsk, Belarus</span>
      </div>
    </div>
  );
}

export default FriendMaxi;

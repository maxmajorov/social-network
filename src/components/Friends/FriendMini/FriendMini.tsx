import React from "react";
import classes from "./FriendMini.module.css";

function FriendMini() {
  return (
    <div className={classes.friendCard}>
      <img
        className={classes.friendAvatar}
        src="../../img/friend.png"
        alt="friend-name"
      ></img>
      <span className={classes.friendName}>Olga</span>
    </div>
  );
}

export default FriendMini;

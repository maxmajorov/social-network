import React from "react";
import FriendMaxi from "./FriendMaxi/FriendMaxi";
import classes from "./Friends.module.css";

function Friends() {
  return (
    <main className={classes.friends}>
      <div className={classes.search}>
        <input className={classes.serchInput} type="text" />
      </div>
      <div className={classes.list}>
        <FriendMaxi />
        <FriendMaxi />
        <FriendMaxi />
      </div>
    </main>
  );
}

export default Friends;

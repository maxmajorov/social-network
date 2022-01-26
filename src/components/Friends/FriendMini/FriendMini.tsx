import React from "react";
import classes from "./FriendMini.module.css";

type friendsMiniPropsType = {
  id: string;
  name: string;
  location: {
    city: string;
    country: string;
  };
  avatar: string;
};

function FriendMini(props: friendsMiniPropsType) {
  return (
    <div className={classes.friendCard}>
      <img
        className={classes.friendAvatar}
        src={props.avatar}
        alt="friend-name"
      ></img>
      <span className={classes.friendName}>{props.name}</span>
    </div>
  );
}

export default FriendMini;

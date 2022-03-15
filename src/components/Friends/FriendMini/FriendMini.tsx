import React from "react";
import classes from "./FriendMini.module.css";

export type FriendsMiniPropsType = {
  name: string;
  avatar: string;
};

const FriendMini: React.FC<FriendsMiniPropsType> = (props) => {
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
};

export default FriendMini;

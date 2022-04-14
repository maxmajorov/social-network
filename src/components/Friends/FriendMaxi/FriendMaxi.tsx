import React from "react";
import classes from "./FriendMaxi.module.css";

type FriendsMaxiPropsType = {
  id: string;
  name: string;
  location: {
    city: string;
    country: string;
  };
  avatar: string;
};

export const FriendMaxi: React.FC<FriendsMaxiPropsType> = (props) => {
  return (
    <div className={classes.card}>
      <img
        className={classes.avatar}
        src={props.avatar}
        alt="friend-name"
      ></img>
      <div className={classes.info}>
        <span className={classes.name}>{props.name}</span>
        <span className={classes.name}>
          {props.location.city}, {props.location.country}
        </span>
      </div>
    </div>
  );
};

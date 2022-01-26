import React from "react";
import classes from "./FriendMaxi.module.css";

type friendsMaxiPropsType = {
  id: string;
  name: string;
  location: {
    city: string;
    country: string;
  };
  avatar: string;
};

function FriendMaxi(props: friendsMaxiPropsType) {
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
}

export default FriendMaxi;

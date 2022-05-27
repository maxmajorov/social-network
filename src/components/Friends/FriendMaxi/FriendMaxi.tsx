import { Button } from "antd";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import classes from "./FriendMaxi.module.css";

type FriendsMaxiPropsType = {
  id: string;
  name: string;
  avatar: string;
  description?: string;
  followed?: boolean;
  followUser?: (userID: string) => void;
  unFollowUser?: (userID: string) => void;
  followProgress?: boolean;
};

export const FriendMaxi: React.FC<FriendsMaxiPropsType> = React.memo(
  ({
    id,
    name,
    avatar,
    description,
    followed,
    followUser,
    unFollowUser,
    followProgress,
  }) => {
    const subscribeHandler = () => {
      followed
        ? unFollowUser && unFollowUser(id)
        : followUser && followUser(id);
    };

    console.log(followProgress);
    return (
      <div className={classes.card}>
        <NavLink to={"/profile/" + id}>
          <img className={classes.avatar} src={avatar} alt="friend-name"></img>
        </NavLink>

        <div className={classes.cardInner}>
          <div className={classes.info}>
            <span className={classes.name}>{name}</span>
            {description && <span>{description}</span>}
          </div>
          <div className={classes.subscribe}>
            <Button
              type="primary"
              onClick={subscribeHandler}
              disabled={followProgress}
            >
              {!followed ? "Follow" : "Unfollow"}
            </Button>
          </div>
        </div>
      </div>
    );
  }
);

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
};

export const FriendMaxi: React.FC<FriendsMaxiPropsType> = ({
  id,
  name,
  avatar,
  description,
  followed,
  followUser,
  unFollowUser,
}) => {
  const [disable, setDisable] = useState<boolean>(false);

  const subscribeHandler = () => {
    // followed ? unFollowUser && unFollowUser(id) : followUser && followUser(id);

    if (followed) {
      setDisable(true);
      unFollowUser && unFollowUser(id);
    } else {
      followUser && followUser(id);
    }
  };

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
          <Button type="primary" onClick={subscribeHandler} disabled={disable}>
            {!followed ? "Follow" : "Unfollow"}
          </Button>
        </div>
      </div>
    </div>
  );
};

import { Button } from "antd";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FollowResponseType, instance, usersAPI } from "../../../api/api";
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
  console.log("rerender user");
  // const [status, setStatus] = useState<boolean>(followed ? false : true);
  // const [followProgress, setFollowProgress] = useState<boolean>(false); // disabled кнопки на время изменения fol / unfol

  const subscribeHandler = () => {
    followed ? unFollowUser && unFollowUser(id) : followUser && followUser(id);
    // ? usersAPI
    //     .follow(id)
    //     .then((response) => {
    //       setFollowProgress(true);
    //       if (response.data.resultCode === 0) {
    //         setStatus(!status);
    //         followUser && followUser(id);
    //         setFollowProgress(false);
    //       }
    //     })
    //     .catch((err) => console.log(err))

    // : instance.delete<FollowResponseType>(`follow/${id}`).then((response) => {
    //     setFollowProgress(true);
    //     if (response.data.resultCode === 0) {
    //       setStatus(!status);
    //       unFollowUser && unFollowUser(id);
    //       setFollowProgress(false);
    //     }
    //   });
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
          <Button
            type="primary"
            onClick={subscribeHandler}
            // disabled={followProgress}
          >
            {!followed ? "Follow" : "Unfollow"}
          </Button>
        </div>
      </div>
    </div>
  );
};

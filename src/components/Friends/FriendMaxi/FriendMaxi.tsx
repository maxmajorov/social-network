import { Button } from "antd";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { FollowResponseType, instance } from "../../../api/api";
import { AppStateType } from "../../../store/redux-store";
import classes from "./FriendMaxi.module.css";

type LocationType = {
  city: string;
  country: string;
};

type FriendsMaxiPropsType = {
  id: string;
  name: string;
  avatar: string;
  location?: LocationType;
  description?: string;
  followed?: boolean;
  followUser?: (userID: string) => void;
  unFollowUser?: (userID: string) => void;
};

export const FriendMaxi: React.FC<FriendsMaxiPropsType> = ({
  id,
  name,
  avatar,
  location,
  description,
  followed,
  followUser,
  unFollowUser,
}) => {
  console.log("rerender user");
  const [status, setStatus] = useState<boolean>(followed ? false : true);
  const [followProgress, setFollowProgress] = useState<boolean>(); // disabled кнопки на время изменения fol / unfol

  const subscribeHandler = () => {
    !followed
      ? instance
          .post<FollowResponseType>(`follow/${id}`)
          .then((response) => {
            setFollowProgress(true);
            if (response.data.resultCode === 0) {
              setStatus(!status);
              followUser && followUser(id);
              setFollowProgress(false);
            }
          })
          .catch((err) => console.log(err))
      : instance.delete<FollowResponseType>(`follow/${id}`).then((response) => {
          setFollowProgress(true);
          if (response.data.resultCode === 0) {
            setStatus(!status);
            unFollowUser && unFollowUser(id);
            setFollowProgress(false);
          }
        });
  };

  return (
    <div className={classes.card}>
      <NavLink to={"/profile/" + id}>
        <img className={classes.avatar} src={avatar} alt="friend-name"></img>
      </NavLink>

      <div className={classes.cardInner}>
        <div className={classes.info}>
          <span className={classes.name}>{name}</span>
          {/* <span className={classes.name}>
            {location.city && <span>{location.city}}, {location.country && <span>{location.country}</span>}
          </span> */}
          {description && <span>{description}</span>}
        </div>
        <div className={classes.subscribe}>
          <Button
            type="primary"
            onClick={subscribeHandler}
            disabled={followProgress}
          >
            {status ? "Follow" : "Unfollow"}
          </Button>
        </div>
      </div>
    </div>
  );
};

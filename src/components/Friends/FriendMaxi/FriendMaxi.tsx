import React, { useState } from "react";
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
  subscribeUser?: (userID: string) => void;
};

export const FriendMaxi: React.FC<FriendsMaxiPropsType> = ({
  id,
  name,
  avatar,
  location,
  description,
  followed,
  subscribeUser,
}) => {
  const [status, setStatus] = useState<boolean>(followed ? true : false);
  console.log(status);

  const subscribeHandler = () => {
    setStatus(!status);
    subscribeUser && subscribeUser(id);
  };

  return (
    <div className={classes.card}>
      <img className={classes.avatar} src={avatar} alt="friend-name"></img>
      <div className={classes.cardInner}>
        <div className={classes.info}>
          <span className={classes.name}>{name}</span>
          {/* <span className={classes.name}>
            {location.city && <span>{location.city}}, {location.country && <span>{location.country}</span>}
          </span> */}
          {description && <span>{description}</span>}
        </div>
        <div className={classes.subscribe}>
          <button onClick={subscribeHandler}>
            {status ? "Follow" : "Unfollow"}
          </button>
        </div>
      </div>
    </div>
  );
};

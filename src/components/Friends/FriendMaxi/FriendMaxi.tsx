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
  location: LocationType;
  description?: string;
  followed?: boolean;
  subscribe?: (status: boolean) => void;
};

export const FriendMaxi: React.FC<FriendsMaxiPropsType> = ({
  id,
  name,
  avatar,
  location,
  description,
  followed,
  subscribe,
}) => {
  const [status, setStatus] = useState<boolean>(true);
  console.log(status);

  // const subscribeHandler = () => {
  //   setStatus(!status);
  //   subscribe && subscribe(status);
  // };

  const ha = () => {
    console.log("change status");
  };

  return (
    <div className={classes.card}>
      <img className={classes.avatar} src={avatar} alt="friend-name"></img>
      <div className={classes.cardInner}>
        <div className={classes.info}>
          <span className={classes.name}>{name}</span>
          <span className={classes.name}>
            {location.city}, {location.country}
          </span>
          {description && <span>{description}</span>}
        </div>
        <div className={classes.subscribe}>
          <button onChange={ha}>lkjkj{status}</button>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import FriendMaxi from "./FriendMaxi/FriendMaxi";
import classes from "./Friends.module.css";

type friendsObj = {
  id: string;
  name: string;
  location: {
    city: string;
    country: string;
  };
  avatar: string;
};

type friendsPropsType = {
  friends: Array<friendsObj>;
};

function Friends(props: friendsPropsType) {
  return (
    <main className={classes.friends}>
      <div className={classes.search}>
        <input className={classes.serchInput} type="text" />
      </div>
      <div className={classes.list}>
        {props.friends.map((el) => (
          <FriendMaxi
            id={el.id}
            name={el.name}
            avatar={el.avatar}
            location={el.location}
          />
        ))}
      </div>
    </main>
  );
}

export default Friends;

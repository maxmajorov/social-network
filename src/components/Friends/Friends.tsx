import React from "react";
import { FriendsObj } from "../../redux/state";
import FriendMaxi from "./FriendMaxi/FriendMaxi";
import classes from "./Friends.module.css";

type FriendsPropsType = {
  friends: Array<FriendsObj>;
};

function Friends(props: FriendsPropsType) {
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

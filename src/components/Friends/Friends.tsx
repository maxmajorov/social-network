import React from "react";
import { FriendsPageType } from "../../redux/store";
import { FriendMaxi } from "./FriendMaxi/FriendMaxi";
import classes from "./Friends.module.css";

type FriendsPropsType = {
  friends: Array<FriendsPageType>;
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
            key={el._id}
            id={el._id}
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

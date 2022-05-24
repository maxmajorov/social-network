import React, { useEffect } from "react";
import { FriendsPageType } from "../../store/store";
import { FriendMaxi } from "./FriendMaxi/FriendMaxi";
import classes from "./Friends.module.css";

type FriendsPropsType = {
  friends: Array<FriendsPageType>;
};

function Friends(props: FriendsPropsType) {
  useEffect(() => {
    // Потом переисать для всех страниц
    document.title = `Friends`;
    return () => {
      // cleanup
      document.title = `Social Network`;
    };
  });
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
          />
        ))}
      </div>
    </main>
  );
}

export default Friends;

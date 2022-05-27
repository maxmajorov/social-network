import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import { AppStateType } from "../../store/redux-store";
import { FriendsPageType } from "../../store/store";
import { FriendMaxi } from "./FriendMaxi/FriendMaxi";
import classes from "./Friends.module.css";

type FriendsPropsType = {
  friends: Array<FriendsPageType>;
};

function Friends(props: FriendsPropsType) {
  const authState = useSelector((state: AppStateType) => state.authReducer);
  useEffect(() => {
    // Потом переисать для всех страниц
    document.title = `Friends`;
    return () => {
      // cleanup
      document.title = `Social Network`;
    };
  });

  if (!authState.isAuth) {
    console.log(authState.isAuth);
    return <Navigate replace to="/authentication" />;
  }
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

import React, { useEffect } from "react";
import { Navigate } from "react-router";
import { isLoggedInSelector } from "../../bll/reducers/auth-reducer";
import { useAppSelector } from "../../bll/store";
import { selectFriends } from "../../store/selectors";
import { FriendMaxi } from "./FriendMaxi/FriendMaxi";
import classes from "./Friends.module.css";

export const Friends: React.FC = () => {
  const isAuth = useAppSelector(isLoggedInSelector);
  const friends = useAppSelector(selectFriends);

  useEffect(() => {
    document.title = `Friends`;
    return () => {
      // cleanup
      document.title = `Social Network`;
    };
  });

  if (!isAuth) {
    return <Navigate replace to="/authentication" />;
  }
  return (
    <main className={classes.friends}>
      <div className={classes.search}>
        <input className={classes.serchInput} type="text" />
      </div>
      <div className={classes.list}>
        {friends.map((el) => (
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
};

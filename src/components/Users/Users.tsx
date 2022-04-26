import React from "react";
import { UsersObjType } from "../../reducers/users-reducer";
import { FriendMaxi } from "../Friends/FriendMaxi/FriendMaxi";
import classes from "./Users.module.css";

type UsersPropsType = {
  users: Array<UsersObjType>;
  showMoreUsers: () => void;
  subscribeUser: (userID: string) => void;
};

export const Users: React.FC<UsersPropsType> = ({
  users,
  showMoreUsers,
  subscribeUser,
}) => {
  return (
    <main className={classes.friends}>
      <div className={classes.search}>
        <input className={classes.serchInput} type="text" />
      </div>
      <div className={classes.list}>
        {
          users.map((el) => (
            <FriendMaxi
              key={el._id}
              id={el._id}
              name={el.fullname}
              avatar={el.avatar}
              followed={el.followed}
              subscribeUser={subscribeUser}
              location={el.location}
              description={el.description}
            />
          ))
          // .filter((el, ind, arr) => ind < 4)
        }
        {/* ВРЕМЕННО */}
      </div>
      <button onClick={showMoreUsers}>SHOW MORE</button>
    </main>
  );
};

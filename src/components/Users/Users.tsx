import React, { Suspense, useEffect } from "react";
import { UsersFromServerType } from "../../api/api";
import { FriendMaxi } from "../Friends/FriendMaxi/FriendMaxi";

import classes from "./Users.module.css";

type UsersPropsType = {
  users: Array<UsersFromServerType>;
  pagesNumber: Array<number>;
  currentPage: number;
  setCurrentPage: (pageNumber: number) => void;
  showMoreUsers: () => void;
  followUser: (userID: string) => void;
  unFollowUser: (userID: string) => void;
  followProgress: boolean[];
};

export const Users: React.FC<UsersPropsType> = ({
  users,
  pagesNumber,
  currentPage,
  setCurrentPage,
  showMoreUsers,
  followUser,
  unFollowUser,
  followProgress,
}) => {
  useEffect(() => {
    document.title = `Users`;
    return () => {
      // cleanup
      document.title = `Social Network`;
    };
  });
  console.log(users);

  return (
    <main className={classes.friends}>
      <div className={classes.search}>
        <input className={classes.serchInput} type="text" />
      </div>
      <div className={classes.list}>
        {users.map((user, ind) => (
          <FriendMaxi
            key={user.id}
            id={user.id.toString()}
            name={user.name}
            avatar={
              user.photos.small === null
                ? "https://avatarko.ru/img/avatar/11/multfilm_Timon_10391.jpg"
                : user.photos.small
            }
            followed={user.followed}
            followUser={followUser}
            unFollowUser={unFollowUser}
            followProgress={followProgress[ind]}
          />
        ))}
      </div>
      <div className={classes.pages}>
        {pagesNumber
          .map((page) => (
            <span
              key={page}
              className={currentPage === page ? classes.activePage : ""}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </span>
          ))
          .filter((el, ind, arr) => ind < 9)}
      </div>
      <button onClick={showMoreUsers}>SHOW MORE</button>
    </main>
  );
};

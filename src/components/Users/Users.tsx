import React, { useEffect } from "react";
import { UsersFromServerType } from "../../api/api";
import { FriendMaxi } from "../Friends/FriendMaxi/FriendMaxi";
import classes from "./Users.module.css";

type UsersPropsType = {
  users: Array<UsersFromServerType>;

  pagesNumber: Array<number>;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  showMoreUsers: () => void;
  subscribeUser: (userID: string) => void;
};

export const Users: React.FC<UsersPropsType> = ({
  users,
  pagesNumber,
  currentPage,
  setCurrentPage,
  showMoreUsers,
  subscribeUser,
}) => {
  useEffect(() => {
    // Потом переисать для всех страниц
    document.title = `Users`;
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
        {
          users.map((el) => (
            <FriendMaxi
              key={el.id}
              id={el.id.toString()}
              name={el.name}
              avatar={
                el.photos.small === null
                  ? "https://avatarko.ru/img/avatar/11/multfilm_Timon_10391.jpg"
                  : el.photos.small
              }
              followed={el.followed}
              subscribeUser={subscribeUser}
              // location={el.location}
              // description={el.description}
            />
          ))
          // .filter((el, ind, arr) => ind < 10)}
        }
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

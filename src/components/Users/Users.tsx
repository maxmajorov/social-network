import React, { useEffect } from "react";
import { UsersFromServerType } from "../../api/types";
import { appStatusSelect } from "../../bll/reducers/app-reducer";
import {
  currentPageSelect,
  pageSizeSelect,
  totalCountUserSelect,
} from "../../bll/reducers/users-reducer";
import { useAppSelector } from "../../bll/store";
import { PaginationSelect } from "../common/Pagination/PaginationSelect";
import { FriendMaxi } from "../Friends/FriendMaxi/FriendMaxi";
import classes from "./Users.module.css";

type UsersPropsType = {
  users: Array<UsersFromServerType>;
  followUser: (userID: string) => void;
  unFollowUser: (userID: string) => void;
  followProgress: boolean[];
};

export const Users: React.FC<UsersPropsType> = ({
  users,
  followUser,
  unFollowUser,
  followProgress,
}) => {
  const status = useAppSelector(appStatusSelect);
  const totalCount = useAppSelector(totalCountUserSelect);
  const currentPage = useAppSelector(currentPageSelect);
  const pageSize = useAppSelector(pageSizeSelect);

  useEffect(() => {
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
      <PaginationSelect
        disable={status === "loading"}
        totalCount={totalCount}
        pageSize={pageSize}
        currentPage={currentPage}
      />
    </main>
  );
};

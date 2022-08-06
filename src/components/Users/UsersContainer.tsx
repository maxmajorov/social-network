import React, { useCallback, useEffect } from "react";
import { Users } from "./Users";
import { Preloader } from "../Preloader/Preloader";
import { useAppDispatch, useAppSelector } from "../../bll/store";
import {
  currentPageSelect,
  followUserTC,
  folowIngProgressSelect,
  getUsersTC,
  pageSizeSelect,
  selectAllUsersByFilter,
  unfollowUserTC,
} from "../../bll/reducers/users-reducer";
import { appStatusSelect } from "../../bll/reducers/app-reducer";

export const UsersContainer = () => {
  const users = useAppSelector(selectAllUsersByFilter);
  const currentPage = useAppSelector(currentPageSelect);
  const pageSize = useAppSelector(pageSizeSelect);
  const status = useAppSelector(appStatusSelect);
  const followProgress = useAppSelector(folowIngProgressSelect);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUsersTC(currentPage, pageSize));
  }, [dispatch, currentPage, pageSize]);

  const followUserCallback = useCallback(
    (userID: string) => {
      dispatch(followUserTC(userID));
    },
    [dispatch]
  );

  const unFollowUserCallback = useCallback(
    (userID: string) => {
      dispatch(unfollowUserTC(userID));
    },
    [dispatch]
  );

  return (
    <>
      {status === "loading" ? (
        <Preloader />
      ) : (
        <Users
          users={users}
          followUser={followUserCallback}
          unFollowUser={unFollowUserCallback}
          followProgress={followProgress}
        />
      )}
    </>
  );
};

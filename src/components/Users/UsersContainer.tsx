import React, { useCallback, useEffect, useState } from "react";
import { isFetchingAC } from "../../store/actions";
import { Users } from "./Users";
import { Preloader } from "../Preloader/Preloader";
import {
  getUsersThunkCreator,
  followUserThunkCreator,
  unfollowUserThunkCreator,
} from "../../store/thunks/index";

import { useAppDispatch, useAppSelector } from "../../store/redux-store";
import {
  selectAllUsers,
  selectAllUsersByFilter,
  selectFolowingProgress,
  selectIsFetching,
  selectTotalCount,
} from "../../store/selectors";

export const UsersContainer = () => {
  const users = useAppSelector(selectAllUsersByFilter);
  const totalCount = useAppSelector(selectTotalCount);
  const isFetching = useAppSelector(selectIsFetching);
  const followProgress = useAppSelector(selectFolowingProgress);

  const dispatch = useAppDispatch();

  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageSize: number = 8; // Количество пользователей на странице
  let pagesCount: number = Math.ceil(totalCount / pageSize);

  let pagesNumber: number[] = [];
  for (let i = 1; i <= pagesCount; i++) {
    pagesNumber.push(i);
  }

  useEffect(() => {
    if (users.length === 0) {
      dispatch(getUsersThunkCreator(currentPage, pageSize));
    }
  }, [dispatch, users, currentPage, pageSize]);

  const setCurrentPageCallback = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    dispatch(isFetchingAC(true));
    dispatch(getUsersThunkCreator(pageNumber, pageSize));
  };

  const followUserCallback = useCallback(
    (userID: string) => {
      dispatch(followUserThunkCreator(userID));
    },
    [dispatch]
  );

  const unFollowUserCallback = useCallback(
    (userID: string) => {
      dispatch(unfollowUserThunkCreator(userID));
    },
    [dispatch]
  );

  return (
    <>
      {isFetching ? (
        <Preloader />
      ) : (
        <Users
          users={users}
          pagesNumber={pagesNumber}
          currentPage={currentPage}
          setCurrentPage={setCurrentPageCallback}
          followUser={followUserCallback}
          unFollowUser={unFollowUserCallback}
          followProgress={followProgress}
        />
      )}
    </>
  );
};

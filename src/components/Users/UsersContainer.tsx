import React, { useCallback, useEffect, useState } from "react";
import { Users } from "./Users";
import { Preloader } from "../Preloader/Preloader";
import { useAppDispatch, useAppSelector } from "../../bll/store";
import {
  followUserTC,
  folowIngProgressSelect,
  getUsersTC,
  selectAllUsersByFilter,
  totalCountUserSelect,
  unfollowUserTC,
} from "../../bll/reducers/users-reducer";
import { appStatusSelect } from "../../bll/reducers/app-reducer";

export const UsersContainer = () => {
  const users = useAppSelector(selectAllUsersByFilter);
  const totalCount = useAppSelector(totalCountUserSelect);
  const status = useAppSelector(appStatusSelect);
  const followProgress = useAppSelector(folowIngProgressSelect);

  const dispatch = useAppDispatch();

  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageSize: number = 8; // Количество пользователей на странице
  let pagesCount: number = Math.ceil(totalCount / pageSize);

  let pagesNumber: number[] = [];
  for (let i = 1; i <= pagesCount; i++) {
    pagesNumber.push(i);
  }

  console.log(currentPage);

  useEffect(() => {
    dispatch(getUsersTC(currentPage, pageSize));
  }, [dispatch, currentPage, pageSize]);

  const setCurrentPageCallback = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

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

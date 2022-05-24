import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { showMoreUsersAC, isFetchingAC } from "../../store/actions";
import { Users } from "./Users";
import { Preloader } from "../Preloader/Preloader";
import {
  getUsersThunkCreator,
  followUserThunkCreator,
  unfollowUserThunkCreator,
} from "../../store/thunks/index";
import { useSelector } from "react-redux";
import { AppStateType } from "../../store/redux-store";

export const UsersContainer = () => {
  const { users, totalCount, isFetching } = useSelector(
    (state: AppStateType) => state.usersReducer
  );
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageSize: number = 8; // Количество пользователей на странице
  let pagesCount: number = Math.ceil(totalCount / pageSize);

  let pagesNumber: number[] = [];
  for (let i = 1; i <= pagesCount; i++) {
    pagesNumber.push(i);
  }

  useEffect(() => {
    if (users.length === 0) {
      getUsersThunkCreator(currentPage, pageSize)(dispatch);
    }
  }, [dispatch, users, currentPage, pageSize]);

  const setCurrentPageCallback = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    dispatch(isFetchingAC(true));
    getUsersThunkCreator(pageNumber, pageSize)(dispatch);
  };

  const showMoreUsersCallback = () => {
    dispatch(showMoreUsersAC());
  };

  const followUserCallback = (userID: string) => {
    console.log("follow", userID);
    followUserThunkCreator(userID)(dispatch);
    // dispatch(followUserAC(userID));
  };

  const unFollowUserCallback = (userID: string) => {
    console.log("unfollow", userID);
    unfollowUserThunkCreator(userID)(dispatch);
    // dispatch(unFollowUserAC(userID));
  };

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
          showMoreUsers={showMoreUsersCallback}
          followUser={followUserCallback}
          unFollowUser={unFollowUserCallback}
        />
      )}
    </>
  );
};

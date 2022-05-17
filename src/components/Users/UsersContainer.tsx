import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  showMoreUsersAC,
  setUsersAC,
  followUserAC,
  unFollowUserAC,
} from "../../store/actions";
import {
  instance,
  UsersFromServerType,
  UsersResponseType,
} from "../../api/api";
import { Users } from "./Users";
import { Preloader } from "../Preloader/Preloader";

export const UsersContainer = () => {
  const dispatch = useDispatch();

  const [users, setUsers] = useState<Array<UsersFromServerType>>([]);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [fetch, setFetch] = useState<boolean>(true);
  const pageSize: number = 8; // Количество пользователей на странице
  let pagesCount: number = Math.ceil(totalCount / pageSize);

  let pagesNumber: number[] = [];
  for (let i = 1; i <= pagesCount; i++) {
    pagesNumber.push(i);
  }

  useEffect(() => {
    if (users.length === 0) {
      instance
        .get<UsersResponseType>(`users?page=${currentPage}&count=${pageSize}`)
        .then((response) => {
          setFetch(false);
          dispatch(setUsersAC(response.data.items));
          setUsers(response.data.items);
          setTotalCount(response.data.totalCount);
        });
    }
  }, [dispatch, currentPage, pageSize, users]);

  const setCurrentPageCallback = (currentPage: number) => {
    setFetch(true);

    setCurrentPage(currentPage);
    instance
      .get<UsersResponseType>(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        setFetch(false);
        setUsers(response.data.items);
      });
  };

  const showMoreUsersCallback = () => {
    dispatch(showMoreUsersAC());
  };

  const followUserCallback = (userID: string) => {
    dispatch(followUserAC(userID));
  };

  const unFollowUserCallback = (userID: string) => {
    dispatch(unFollowUserAC(userID));
  };

  return (
    <>
      {fetch ? (
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

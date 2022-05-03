import React, { useState } from "react";
// import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  subscribeUserAC,
  showMoreUsersAC,
  setUsersAC,
} from "../../actions/users-actions";
import {
  instance,
  UsersFromServerType,
  UsersResponseType,
} from "../../api/api";
// import { AppStateType } from "../../redux/redux-store";

import { Users } from "./Users";

export const UsersContainer = () => {
  // const usersState = useSelector((state: AppStateType) => state.usersReducer);
  const dispatch = useDispatch();

  // console.log(usersState);

  const [users, setUsers] = useState<Array<UsersFromServerType>>([]);

  if (users.length === 0) {
    instance
      .get<UsersResponseType>(`users`)
      .then((response) => setUsers(response.data.items));
  }

  const showUsers = () => {
    dispatch(setUsersAC(users));
  };

  showUsers();

  const showMoreUsersCallback = () => {
    dispatch(showMoreUsersAC());
  };

  const subscribeUserCallback = (userID: string) => {
    dispatch(subscribeUserAC(userID));
  };

  return (
    <Users
      users={users}
      showMoreUsers={showMoreUsersCallback}
      subscribeUser={subscribeUserCallback}
    />
  );
};

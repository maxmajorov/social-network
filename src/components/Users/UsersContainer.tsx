import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { followUserAC, showMoreUsersAC } from "../../actions/users-actions";
import { AppStateType } from "../../redux/redux-store";
import { Users } from "./Users";

export const UsersContainer = () => {
  const usersState = useSelector(
    (state: AppStateType) => state.usersReducer.users
  );
  const dispatch = useDispatch();

  const showMoreUsersCallback = () => {
    dispatch(showMoreUsersAC());
  };

  const followedUserCallback = (status: boolean) => {
    dispatch(followUserAC(status));
  };

  return (
    <Users
      users={usersState}
      showMoreUsers={showMoreUsersCallback}
      followedUser={followedUserCallback}
    />
  );
};

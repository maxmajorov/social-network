import { UsersObjType } from "./../reducers/users-reducer";
export const SHOW_MORE_USERS = "SHOW-MORE-USERS";
export const SUBSCRIBE_USER = "SUBSCRIBE-USER";
export const SET_USERS = "SET-USERS";

export type UsersActionsType =
  | ShowMoreUsersACType
  | SubscribeACType
  | SetUsersCType;

type ShowMoreUsersACType = {
  type: typeof SHOW_MORE_USERS;
};

type SubscribeACType = {
  type: typeof SUBSCRIBE_USER;
  userID: string;
};

type SetUsersCType = {
  type: typeof SET_USERS;
  users: Array<UsersObjType>;
};

export const showMoreUsersAC = (): ShowMoreUsersACType => ({
  type: SHOW_MORE_USERS,
});

export const subscribeUserAC = (userID: string): SubscribeACType => ({
  type: SUBSCRIBE_USER,
  userID: userID,
});

export const setUsersAC = (users: Array<UsersObjType>): SetUsersCType => ({
  type: SET_USERS,
  users: users,
});

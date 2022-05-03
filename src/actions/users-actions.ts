import { UsersFromServerType } from "../api/api";

export const SHOW_MORE_USERS = "SHOW-MORE-USERS";
export const SUBSCRIBE_USER = "SUBSCRIBE-USER";
export const SET_USERS = "SET-USERS";

export type UsersActionsType =
  | ShowMoreUsersACType
  | SubscribeACType
  | SetUsersType;

type ShowMoreUsersACType = {
  type: typeof SHOW_MORE_USERS;
};

export const showMoreUsersAC = (): ShowMoreUsersACType => ({
  type: SHOW_MORE_USERS,
});

type SubscribeACType = {
  type: typeof SUBSCRIBE_USER;
  userID: string;
};

export const subscribeUserAC = (userID: string): SubscribeACType => ({
  type: SUBSCRIBE_USER,
  userID: userID,
});

type SetUsersType = {
  type: typeof SET_USERS;
  users: Array<UsersFromServerType>;
};

export const setUsersAC = (
  users: Array<UsersFromServerType>
): SetUsersType => ({
  type: SET_USERS,
  users: users,
});

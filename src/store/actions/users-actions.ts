import { UsersFromServerType } from "../../api/api";

export const SHOW_MORE_USERS = "SHOW-MORE-USERS";
export const FOLLOW_USER = "FOLLOW-USER";
export const UNFOLLOW_USER = "UNFOLLOW-USER";
export const SET_USERS = "SET-USERS";
export const SET_PAGE_NUMBER = "SET-PAGE-NUMBER";

export type UsersActionsType =
  | ShowMoreUsersACType
  | FollowACType
  | UnFollowACType
  | SetUsersType;
// | SetPageNumberACType;

type ShowMoreUsersACType = {
  type: typeof SHOW_MORE_USERS;
};

export const showMoreUsersAC = (): ShowMoreUsersACType => ({
  type: SHOW_MORE_USERS,
});

type FollowACType = {
  type: typeof FOLLOW_USER;
  userID: string;
};

export const followUserAC = (userID: string): FollowACType => ({
  type: FOLLOW_USER,
  userID: userID,
});

type UnFollowACType = {
  type: typeof UNFOLLOW_USER;
  userID: string;
};

export const unFollowUserAC = (userID: string): UnFollowACType => ({
  type: UNFOLLOW_USER,
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

// type SetPageNumberACType = {
//   type: typeof SET_PAGE_NUMBER;
//   currentPage: number;
// };

// export const setPageNumberAC = (currentPage: number): SetPageNumberACType => ({
//   type: SET_PAGE_NUMBER,
//   currentPage: currentPage,
// });

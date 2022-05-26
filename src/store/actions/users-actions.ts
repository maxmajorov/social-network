import { UsersFromServerType } from "../../api/api";

export const SHOW_MORE_USERS = "SHOW-MORE-USERS";
export const FOLLOW_USER = "FOLLOW-USER";
export const UNFOLLOW_USER = "UNFOLLOW-USER";
export const GET_USERS = "GET-USERS";
export const SET_TOTAL_COUNT_USERS = "SET-TOTAL-COUNT-USERS";
export const IS_FETCHING = "IS-FETCHING";
export const FOLLOW_IN_PROGRESS = "FOLLOW-IN-PROGRESS";

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

type GetUsersType = {
  type: typeof GET_USERS;
  users: Array<UsersFromServerType>;
};

export const getUsersAC = (
  users: Array<UsersFromServerType>
): GetUsersType => ({
  type: GET_USERS,
  users: users,
});

type SetTotalCountUsersACType = {
  type: typeof SET_TOTAL_COUNT_USERS;
  totalCount: number;
};

export const setTotalCountUsersAC = (
  totalCount: number
): SetTotalCountUsersACType => ({
  type: SET_TOTAL_COUNT_USERS,
  totalCount: totalCount,
});

type IsFetchingACType = {
  type: typeof IS_FETCHING;
  fetch: boolean;
};

export const isFetchingAC = (fetch: boolean): IsFetchingACType => ({
  type: IS_FETCHING,
  fetch: fetch,
});

type followProgressACType = {
  type: typeof FOLLOW_IN_PROGRESS;
  fetch: boolean;
};

export const followProgressAC = (fetch: boolean): followProgressACType => ({
  type: FOLLOW_IN_PROGRESS,
  fetch: fetch,
});

export type UsersActionsType =
  | ShowMoreUsersACType
  | FollowACType
  | UnFollowACType
  | GetUsersType
  | SetTotalCountUsersACType
  | IsFetchingACType
  | followProgressACType;

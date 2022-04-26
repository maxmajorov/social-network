export const SHOW_MORE_USERS = "SHOW-MORE-USERS";
export const FOLLOW_USER = "FOLLOW-USER";

export type UsersActionsType = ShowMoreUsersACType | FollowACType;

type ShowMoreUsersACType = {
  type: typeof SHOW_MORE_USERS;
};

type FollowACType = {
  type: typeof FOLLOW_USER;
  status: boolean;
};

export const showMoreUsersAC = (): ShowMoreUsersACType => ({
  type: SHOW_MORE_USERS,
});

export const followUserAC = (status: boolean): FollowACType => ({
  type: FOLLOW_USER,
  status: status,
});

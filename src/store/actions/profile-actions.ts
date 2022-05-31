import { ProfileResponseType } from "./../../api/api";

export const ADD_NEW_POST = "ADD-NEW-POST";
// export const GET_MY_PROFILE = "GET-MY-PROFILE";
export const IS_FETCHING_PROFILE = "IS-FETCHING-PROFILE";
export const GET_USER_PROFILE = "GET-USER-PROFILE";
export const GET_USER_PROFILE_STATUS = "GET-USER-PROFILE-STATUS";
export const PUT_USER_PROFILE_STATUS = "PUT-USER-PROFILE-STATUS";

type AddNewPostACType = {
  type: typeof ADD_NEW_POST;
  newPost: string;
};

export const addNewPostAC = (newPost: string): AddNewPostACType => ({
  type: ADD_NEW_POST,
  newPost: newPost,
});

type GetUserProfileACType = {
  type: typeof GET_USER_PROFILE;
  profile: ProfileResponseType;
};

type IsFetchingProfileACType = {
  type: typeof IS_FETCHING_PROFILE;
  fetch: boolean;
};

export const isFetchingProfileAC = (
  fetch: boolean
): IsFetchingProfileACType => ({
  type: IS_FETCHING_PROFILE,
  fetch: fetch,
});

export const getUserProfileAC = (
  profile: ProfileResponseType
): GetUserProfileACType => ({
  type: GET_USER_PROFILE,
  profile: profile,
});

type GetUserProfileStatusACType = {
  type: typeof GET_USER_PROFILE_STATUS;
  userId: number;
  status: string;
};

export const getUserProfileStatusAC = (
  userId: number,
  status: string
): GetUserProfileStatusACType => ({
  type: GET_USER_PROFILE_STATUS,
  userId: userId,
  status: status,
});

type PutUserProfileStatusACType = {
  type: typeof PUT_USER_PROFILE_STATUS;
  status: string;
};

export const updateUserProfileStatusAC = (
  status: string
): PutUserProfileStatusACType => ({
  type: PUT_USER_PROFILE_STATUS,
  status: status,
});

export type PostsActionsType =
  | AddNewPostACType
  // | GetMyProfileACType
  | IsFetchingProfileACType
  | GetUserProfileACType
  | GetUserProfileStatusACType
  | PutUserProfileStatusACType;

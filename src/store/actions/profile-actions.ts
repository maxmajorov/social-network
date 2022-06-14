import { ProfileResponseType } from "./../../api/api";

export const ADD_NEW_POST = "ADD-NEW-POST";
export const IS_FETCHING_PROFILE = "IS-FETCHING-PROFILE";
export const GET_USER_PROFILE = "GET-USER-PROFILE";
export const GET_USER_PROFILE_STATUS = "GET-USER-PROFILE-STATUS";
export const PUT_USER_PROFILE_STATUS = "PUT-USER-PROFILE-STATUS";

export const addNewPostAC = (newPost: string) =>
  ({
    type: ADD_NEW_POST,
    newPost,
  } as const);

export const isFetchingProfileAC = (fetch: boolean) =>
  ({
    type: IS_FETCHING_PROFILE,
    fetch,
  } as const);

export const getUserProfileAC = (profile: ProfileResponseType) =>
  ({
    type: GET_USER_PROFILE,
    profile,
  } as const);

export const getUserProfileStatusAC = (userId: number, status: string) =>
  ({
    type: GET_USER_PROFILE_STATUS,
    userId,
    status,
  } as const);

export const updateUserProfileStatusAC = (status: string) =>
  ({
    type: PUT_USER_PROFILE_STATUS,
    status,
  } as const);

export type PostsActionsType =
  | ReturnType<typeof addNewPostAC>
  | ReturnType<typeof isFetchingProfileAC>
  | ReturnType<typeof getUserProfileAC>
  | ReturnType<typeof getUserProfileStatusAC>
  | ReturnType<typeof updateUserProfileStatusAC>;

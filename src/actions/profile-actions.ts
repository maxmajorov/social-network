import { ProfileResponseType } from "../api/api";

export const ADD_NEW_POST = "ADD-NEW-POST";
export const SHOW_USER_PROFILE = "SHOW-USER-PROFILE";

export type PostsActionsType = AddNewPostACType | ShowUserProfileACType;

type AddNewPostACType = {
  type: typeof ADD_NEW_POST;
  newPost: string;
};

export const addNewPostAC = (newPost: string): AddNewPostACType => ({
  type: ADD_NEW_POST,
  newPost: newPost,
});

type ShowUserProfileACType = {
  type: typeof SHOW_USER_PROFILE;
  profile: ProfileResponseType;
};

export const showUserProfileAC = (
  profile: ProfileResponseType
): ShowUserProfileACType => ({
  type: SHOW_USER_PROFILE,
  profile: profile,
});

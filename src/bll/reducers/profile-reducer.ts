import { AxiosError } from "axios";
import { Params } from "react-router";
import { v1 } from "uuid";
import { profileAPI, ProfileResponseType } from "../../api/api";
import { AppRootStateType, AppThunk } from "../store";
import { appSetStatusAC } from "./app-reducer";

const initialState = {
  isFetching: true,
  profile: {
    userId: 0,
    lookingForAJob: true,
    lookingForAJobDescription: "",
    fullName: "",
    contacts: {
      github: "",
      vk: "none",
      facebook: "none",
      instagram: "none",
      twitter: "none",
      website: "none",
      youtube: "none",
      mainLink: "",
    },
    photos: {
      small: "./img/avatar.jpg",
      large: "./img/avatar.jpg",
    },
  },
  profileStatus: "",
  posts: [
    { _id: v1(), text: "Hello everybody!", likes: 4, comments: 2 },
    { _id: v1(), text: "I'm start learning React", likes: 14, comments: 4 },
    { _id: v1(), text: "Redux & TypeScript...", likes: 8, comments: 10 },
  ] as Array<PostObj>,
  newPostText: "Write something here...",
};

export const profileReducer = (
  state: InitialStateType = initialState,
  action: ProfileActionsType
): InitialStateType => {
  switch (action.type) {
    case "PROFILE/add-new-post": {
      const postItem = {
        _id: v1(),
        text: action.newPost,
        likes: 0,
        comments: 0,
      };
      return { ...state, posts: [postItem, ...state.posts] };
    }

    case "PROFILE/is-fetching-profile": {
      return { ...state, isFetching: action.fetch };
    }

    case "PROFILE/get-user-profile": {
      return { ...state, profile: action.profile };
    }

    case "PROFILE/get-user-profile-status": {
      return {
        ...state,
        profileStatus:
          state.profile.userId === action.userId
            ? action.status
            : action.status,
      };
    }

    case "PROFILE/set-user-profile-status": {
      return { ...state, profileStatus: action.status };
    }

    default: {
      return state;
    }
  }
};

// ====ACTIONS ====

export const addNewPostAC = (newPost: string) =>
  ({
    type: "PROFILE/add-new-post",
    newPost,
  } as const);

export const isFetchingProfileAC = (fetch: boolean) =>
  ({
    type: "PROFILE/is-fetching-profile",
    fetch,
  } as const);

export const getUserProfileAC = (profile: ProfileResponseType) =>
  ({
    type: "PROFILE/get-user-profile",
    profile,
  } as const);

export const getUserProfileStatusAC = (userId: number, status: string) =>
  ({
    type: "PROFILE/get-user-profile-status",
    userId,
    status,
  } as const);

export const updateUserProfileStatusAC = (status: string) =>
  ({
    type: "PROFILE/set-user-profile-status",
    status,
  } as const);

// ==== SELECTORS====

export const isProfileFetchingSelect = (state: AppRootStateType) =>
  state.profileReducer.isFetching;

export const profileStatusSelect = (state: AppRootStateType) =>
  state.profileReducer.profileStatus;

export const postsSelect = (state: AppRootStateType) =>
  state.profileReducer.posts;

// ====THUNKS=====

export const getMyProfileTC = (): AppThunk => async (dispatch) => {
  try {
    dispatch(appSetStatusAC("loading"));
    const response = await profileAPI.getMyProfile();
    dispatch(getUserProfileAC(response));
  } catch (e) {
    const err = e as Error | AxiosError<{ error: string }>;
  } finally {
    dispatch(appSetStatusAC("idle"));
  }
};

export const getUserProfileTC =
  (userId: Params<string>): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(appSetStatusAC("loading"));
      const response = await profileAPI.getUserProfile(userId);
      dispatch(getUserProfileAC(response));
      dispatch(isFetchingProfileAC(false));
    } catch (e) {
      const err = e as Error | AxiosError<{ error: string }>;
    } finally {
      dispatch(appSetStatusAC("idle"));
    }
  };

export const getProfileStatusTC =
  (userId: Params<string>): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(appSetStatusAC("loading"));
      const status = await profileAPI.getProfileStatus(userId);
      dispatch(getUserProfileStatusAC(Number(userId.userId), status));
    } catch (e) {
      const err = e as Error | AxiosError<{ error: string }>;
    } finally {
      dispatch(appSetStatusAC("idle"));
    }
  };

export const updateProfileStatusTC =
  (status: string): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(appSetStatusAC("loading"));
      const response = await profileAPI.updateProfileStatus(status);
      dispatch(updateUserProfileStatusAC(status));
    } catch (e) {
      const err = e as Error | AxiosError<{ error: string }>;
    } finally {
      dispatch(appSetStatusAC("idle"));
    }
  };

// ==== TYPES ====

export type PostObj = {
  _id: string;
  text: string;
  likes: number;
  comments: number;
};

export type ProfilePageType = {
  profile: ProfileResponseType | null;
  posts: Array<PostObj>;
  newPostText: string;
};

export type InitialStateType = typeof initialState;

export type ProfileActionsType =
  | ReturnType<typeof addNewPostAC>
  | ReturnType<typeof isFetchingProfileAC>
  | ReturnType<typeof getUserProfileAC>
  | ReturnType<typeof getUserProfileStatusAC>
  | ReturnType<typeof updateUserProfileStatusAC>;

import { AppStateType } from "../redux-store";

export const selectIsProfileFetching = (state: AppStateType) =>
  state.profileReducer.isFetching;

export const selectProfileStatus = (state: AppStateType) =>
  state.profileReducer.profileStatus;

export const selectPosts = (state: AppStateType) => state.profileReducer.posts;

import { AppRootStateType } from "../../bll/store";

export const selectIsProfileFetching = (state: AppRootStateType) =>
  state.profileReducer.isFetching;

export const selectProfileStatus = (state: AppRootStateType) =>
  state.profileReducer.profileStatus;

export const selectPosts = (state: AppRootStateType) =>
  state.profileReducer.posts;

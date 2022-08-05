import { AppRootStateType } from "../../bll/store";

export const selectFriends = (state: AppRootStateType) =>
  state.friendsReducer.friends;

import { AppStateType } from "../redux-store";

export const selectFriends = (state: AppStateType) =>
  state.friendsReducer.friends;

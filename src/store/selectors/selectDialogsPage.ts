import { AppStateType } from "../redux-store";

export const selectDialogs = (state: AppStateType) =>
  state.dialogsReducer.dialogs;

export const selectMessages = (state: AppStateType) =>
  state.dialogsReducer.messages;

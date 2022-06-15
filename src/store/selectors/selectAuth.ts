import { AppStateType } from "../redux-store";

export const selectLogin = (state: AppStateType) => state.authReducer.login;

export const selectMyProfileID = (state: AppStateType) => state.authReducer.id;

export const selectResponseMessage = (state: AppStateType) =>
  state.authReducer.responseMessage;

export const selectIsAuth = (state: AppStateType) => state.authReducer.isAuth;

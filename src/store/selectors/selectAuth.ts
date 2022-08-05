import { AppRootStateType } from "../../bll/store";

export const selectLogin = (state: AppRootStateType) => state.authReducer.login;

export const selectMyProfileID = (state: AppRootStateType) =>
  state.authReducer.id;

export const selectResponseMessage = (state: AppRootStateType) =>
  state.authReducer.responseMessage;

export const selectIsAuth = (state: AppRootStateType) =>
  state.authReducer.isAuth;

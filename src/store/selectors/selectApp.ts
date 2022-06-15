import { AppStateType } from "../redux-store";

export const selectAppInitialize = (state: AppStateType) =>
  state.appReducer.initialized;

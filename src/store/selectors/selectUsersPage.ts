import { createSelector } from "@reduxjs/toolkit";
import { AppStateType } from "../redux-store";

export const selectAllUsers = (state: AppStateType) => state.usersReducer.users;

//Например нам нужно отфильтровать User. В таком случает будет постоянно перерисовываться
// страница с users. Чтобы этого избежать и оптимизировать приложение возпользуесмся
// библиотекой reselect

export const selectAllUsersByFilter = createSelector(
  [selectAllUsers],
  (allUsers) => allUsers.filter((user) => true) //можно прописать любую логику а также использовать более одного селектора
);

export const selectTotalCount = (state: AppStateType) =>
  state.usersReducer.totalCount;

export const selectIsFetching = (state: AppStateType) =>
  state.usersReducer.isFetching;

export const selectFolowingProgress = (state: AppStateType) =>
  state.usersReducer.followProgress;

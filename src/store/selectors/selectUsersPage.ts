import { createSelector } from "@reduxjs/toolkit";
import { AppRootStateType } from "../../bll/store";

export const selectAllUsers = (state: AppRootStateType) =>
  state.usersReducer.users;

//Например нам нужно отфильтровать User. В таком случает будет постоянно перерисовываться
// страница с users. Чтобы этого избежать и оптимизировать приложение возпользуесмся
// библиотекой reselect

export const selectAllUsersByFilter = createSelector(
  [selectAllUsers],
  (allUsers) => allUsers.filter((user) => true) //можно прописать любую логику а также использовать более одного селектора
);

export const selectTotalCount = (state: AppRootStateType) =>
  state.usersReducer.totalCount;

export const selectIsFetching = (state: AppRootStateType) =>
  state.usersReducer.isFetching;

export const selectFolowingProgress = (state: AppRootStateType) =>
  state.usersReducer.followProgress;

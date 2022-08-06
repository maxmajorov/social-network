import { AxiosError } from "axios";
import { createSelector } from "reselect";
import { usersAPI } from "../../api/api";
import { UsersFromServerType } from "../../api/types";
import { AppRootStateType, AppThunk, useAppDispatchType } from "../store";
import { appSetStatusAC } from "./app-reducer";

const initialState = {
  users: [],
  currentPage: 1,
  totalCount: 0,
  followProgress: [],
};

export const usersReducer = (
  state: InitialStateType = initialState,
  action: UsersActionsType
): InitialStateType => {
  switch (action.type) {
    case "USERS/follow-user": {
      return {
        ...state,
        users: state.users.map((el) =>
          el.id.toString() === action.userID ? { ...el, followed: true } : el
        ),
      };
    }

    case "USERS/unfollow-user": {
      return {
        ...state,
        users: state.users.map((el) =>
          el.id.toString() === action.userID ? { ...el, followed: false } : el
        ),
      };
    }

    case "USERS/fetch-users": {
      return {
        ...state,
        users: action.users,
      };
    }

    case "USERS/set-total-user-count": {
      return {
        ...state,
        totalCount: action.totalCount,
      };
    }

    case "USERS/follow-in-progress": {
      return {
        ...state,
        followProgress: state.users.map((user) =>
          user.id.toString() === action.userID ? action.fetch : false
        ),
      };
    }

    default: {
      return state;
    }
  }
};

// ====ACTIONS====

export const followUserAC = (userID: string) =>
  ({
    type: "USERS/follow-user",
    userID,
  } as const);

export const unFollowUserAC = (userID: string) =>
  ({
    type: "USERS/unfollow-user",
    userID,
  } as const);

export const getUsersAC = (users: Array<UsersFromServerType>) =>
  ({
    type: "USERS/fetch-users",
    users,
  } as const);

export const setTotalCountUsersAC = (totalCount: number) =>
  ({
    type: "USERS/set-total-user-count",
    totalCount,
  } as const);

export const followProgressAC = (fetch: boolean, userID: string) =>
  ({
    type: "USERS/follow-in-progress",
    fetch,
    userID,
  } as const);

// ====SELECTORS====

export const selectAllUsers = (state: AppRootStateType) =>
  state.usersReducer.users;

//Например нам нужно отфильтровать User. В таком случает будет постоянно перерисовываться
// страница с users. Чтобы этого избежать и оптимизировать приложение возпользуесмся
// библиотекой reselect

export const selectAllUsersByFilter = createSelector(
  [selectAllUsers],
  (allUsers) => allUsers.filter((user) => true) //можно прописать любую логику а также использовать более одного селектора
);

export const totalCountUserSelect = (state: AppRootStateType) =>
  state.usersReducer.totalCount;

export const folowIngProgressSelect = (state: AppRootStateType) =>
  state.usersReducer.followProgress;

// ====THUNKS====

export const getUsersTC =
  (currentPage: number, pageSize: number): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(appSetStatusAC("loading"));
      const response = await usersAPI.getUsers(currentPage, pageSize);
      dispatch(getUsersAC(response.items));
      dispatch(setTotalCountUsersAC(response.totalCount));
    } catch (e) {
      const err = e as Error | AxiosError<{ error: string }>;
      // handleNetworkError(dispatch, err);
    } finally {
      dispatch(appSetStatusAC("idle"));
    }
  };

// ====help function====

const followUnfollowHelper = async (
  dispatch: useAppDispatchType,
  userID: string,
  action: string
) => {
  try {
    dispatch(followProgressAC(true, userID));
    dispatch(appSetStatusAC("loading"));

    if (action === "follow") {
      const response = await usersAPI.follow(userID);
      if (response.data.resultCode === 0) {
        dispatch(followUserAC(userID));
      }
    } else if (action === "unFollow") {
      const response = await usersAPI.unfollow(userID);
      if (response.data.resultCode === 0) {
        dispatch(unFollowUserAC(userID));
      }
    }

    dispatch(followProgressAC(false, userID));
  } catch (e) {
    const err = e as Error | AxiosError<{ error: string }>;
    // handleNetworkError(dispatch, err);
  } finally {
    dispatch(appSetStatusAC("idle"));
  }
};

export const followUserTC =
  (userID: string): AppThunk =>
  async (dispatch) => {
    followUnfollowHelper(dispatch, userID, "follow");
  };

export const unfollowUserTC =
  (userID: string): AppThunk =>
  async (dispatch) => {
    followUnfollowHelper(dispatch, userID, "unFollow");
  };

// ====TYPES====

export type InitialStateType = {
  users: Array<UsersFromServerType>;
  currentPage: number;
  totalCount: number;
  followProgress: Array<boolean>;
};

export type FollowUserType = ReturnType<typeof followUserAC>;
export type UnfollowUserType = ReturnType<typeof unFollowUserAC>;
export type GetUsersType = ReturnType<typeof getUsersAC>;
export type SetTotalCountUsersType = ReturnType<typeof setTotalCountUsersAC>;
export type FollowProgressType = ReturnType<typeof followProgressAC>;

export type UsersActionsType =
  | FollowUserType
  | UnfollowUserType
  | GetUsersType
  | SetTotalCountUsersType
  | FollowProgressType;

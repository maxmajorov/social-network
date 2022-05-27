import { followUserAC } from "./../actions/users-actions";
import {
  FOLLOW_USER,
  SET_TOTAL_COUNT_USERS,
  GET_USERS,
  SHOW_MORE_USERS,
  UNFOLLOW_USER,
  IS_FETCHING,
  UsersActionsType,
  FOLLOW_IN_PROGRESS,
} from "../actions/users-actions";
import { UsersFromServerType } from "../../api/api";

export type initialStateType = {
  users: Array<UsersFromServerType>;
  currentPage: number;
  totalCount: number;
  isFetching: boolean;
  followProgress: Array<boolean>;
};

const initialState = {
  users: [],
  currentPage: 1,
  totalCount: 0,
  isFetching: true,
  followProgress: [],
};

export const usersReducer = (
  state: initialStateType = initialState,
  action: UsersActionsType
): initialStateType => {
  switch (action.type) {
    case SHOW_MORE_USERS: {
      console.log("showMore, do it later. Request state from server");
      return { ...state };
    }
    case FOLLOW_USER: {
      return {
        ...state,
        users: state.users.map((el) =>
          el.id.toString() === action.userID ? { ...el, followed: true } : el
        ),
      };
    }

    case UNFOLLOW_USER: {
      return {
        ...state,
        users: state.users.map((el) =>
          el.id.toString() === action.userID ? { ...el, followed: false } : el
        ),
      };
    }

    case GET_USERS: {
      return {
        ...state,
        users: action.users,
      };
    }

    case SET_TOTAL_COUNT_USERS: {
      return {
        ...state,
        totalCount: action.totalCount,
      };
    }

    case IS_FETCHING: {
      return {
        ...state,
        isFetching: action.fetch,
      };
    }

    case FOLLOW_IN_PROGRESS: {
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

import { isFetchingAC, followUserAC } from "./../actions/users-actions";
import { AnyAction, Dispatch } from "redux";
import { usersAPI } from "../../api/api";
import { getUsersAC, setTotalCountUsersAC } from "../actions";

export const getUsersThunkCreator = (currentPage: number, pageSize: number) => {
  return (dispatch: Dispatch<AnyAction>) => {
    usersAPI.getUsers(currentPage, pageSize).then((data) => {
      dispatch(isFetchingAC(false));
      dispatch(getUsersAC(data.items));
      dispatch(setTotalCountUsersAC(data.totalCount));
    });
  };
};

export const followUserThunkCreator = (userID: string) => {
  return (dispatch: Dispatch<AnyAction>) => {
    usersAPI.follow(userID).then((response) => {
      console.log(response);
      response.data.resultCode === 0
        ? dispatch(followUserAC(userID))
        : console.log("asas");
    });
  };
};

export const unfollowUserThunkCreator = (userID: string) => {
  return (dispatch: Dispatch<AnyAction>) => {
    usersAPI.unfollow(userID).then((response) => {
      console.log(response);
      response.data.resultCode === 0
        ? dispatch(followUserAC(userID))
        : console.log("asas");
    });
  };
};

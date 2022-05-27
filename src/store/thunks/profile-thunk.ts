import { Params } from "react-router";
import { AnyAction, Dispatch } from "redux";
import { usersAPI } from "../../api/api";
import { showUserProfileAC } from "../actions";

export const getUserProfileTC = (params: Params<string>) => {
  return (dispatch: Dispatch<AnyAction>) => {
    usersAPI
      .getUserProfile(params)
      .then((response) => dispatch(showUserProfileAC(response)));
  };
};

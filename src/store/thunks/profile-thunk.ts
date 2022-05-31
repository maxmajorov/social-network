import { Params } from "react-router";
import { AnyAction, Dispatch } from "redux";
import { profileAPI } from "../../api/api";
import {
  getUserProfileAC,
  getUserProfileStatusAC,
  updateUserProfileStatusAC,
} from "../actions";

export const getMyProfileTC = () => {
  // Наживая на my profile ==> вызывается санка на загрузку моего профиля но
  // но dispatch будет на запрос профиля юзера и соответственно этот
  // action попадет в reducer и изменит state
  return (dispatch: Dispatch<AnyAction>) => {
    profileAPI
      .getMyProfile()
      .then((response) => dispatch(getUserProfileAC(response)));
  };
};

export const getUserProfileTC = (userId: Params<string>) => {
  return (dispatch: Dispatch<AnyAction>) => {
    profileAPI
      .getUserProfile(userId)
      .then((response) => dispatch(getUserProfileAC(response)));
  };
};

export const getProfileStatusTC = (userId: Params<string>) => {
  return (dispatch: Dispatch<AnyAction>) => {
    profileAPI
      .getProfileStatus(userId)
      .then((status) =>
        dispatch(getUserProfileStatusAC(Number(userId.userId), status))
      );
  };
};

export const updateProfileStatusTC = (status: string) => {
  return (dispatch: Dispatch<AnyAction>) => {
    profileAPI
      .updateProfileStatus(status)
      .then((response) => dispatch(updateUserProfileStatusAC(status)));
  };
};

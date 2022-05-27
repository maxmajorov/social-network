import { authorizeMeAC } from "./../actions/auth-actions";
import { AnyAction, Dispatch } from "redux";
import { authAPI } from "../../api/api";

export const authUserTC = () => {
  return (dispatch: Dispatch<AnyAction>) => {
    authAPI.authUser().then((response) => dispatch(authorizeMeAC(response)));
  };
};

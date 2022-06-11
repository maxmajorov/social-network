import { authorizeMeAC } from "./../actions/auth-actions";
import { AnyAction, Dispatch } from "redux";
import { authAPI } from "../../api/api";

export const authUserTC = () => (dispatch: Dispatch<AnyAction>) => {
  authAPI.authUser().then((response) => {
    if (response.resultCode === 0) {
      const { id, login, email } = response.data;
      dispatch(authorizeMeAC(id, login, email, true));
    }
  });
};

export const loginTC =
  (email: string, password: string, rememberMe: boolean) =>
  (dispatch: Dispatch<AnyAction>) => {
    authAPI.login(email, password, rememberMe).then((response) => {
      console.log(response, email);
      if (response.resultCode === 0) {
        authUserTC()(dispatch);
      } else alert(response.messages);
    });
  };

export const logoutTC = () => (dispatch: Dispatch<AnyAction>) => {
  authAPI.logout().then((response) => {
    if (response.resultCode === 0) {
      dispatch(authorizeMeAC(null, null, null, false));
    }
  });
};

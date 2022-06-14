import { AnyAction, Dispatch } from "redux";
import { appSetInitializedAC } from "../actions";
import { authUserTC } from "./auth-thunk";

export const initializeAppTC = () => (dispatch: Dispatch<AnyAction>) => {
  const requestResult = authUserTC()(dispatch);
  requestResult.then(() => {
    dispatch(appSetInitializedAC());
  });
};

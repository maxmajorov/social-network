import { AppRootStateType, AppThunk } from "../store";
import { appSetErrorAC, appSetStatusAC } from "./app-reducer";
import { AxiosError } from "axios";
import { authAPI } from "../../api/api";
// import { handleNetworkError } from "../../utils/errorUtils";

const initialState = {
  isLoggedIn: false,
  userID: null as number | null,
  responseMessage: "",
};

export const authReducer = (
  state: InitialStateType = initialState,
  action: AuthActionsType
): InitialStateType => {
  switch (action.type) {
    case "AUTH/login": {
      return { ...state, isLoggedIn: action.value };
    }

    case "AUTH/set-userID": {
      return { ...state, userID: action.userID };
    }

    default:
      return state;
  }
};

// ==== ACTIONS =====

export const loginAC = (value: boolean) =>
  ({ type: "AUTH/login", value } as const);

export const setUserIDAC = (userID: number) =>
  ({ type: "AUTH/set-userID", userID } as const);

// ===== THUNKS ====

export const loginTC =
  (email: string, password: string, rememderme: boolean): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(appSetStatusAC("loading"));
      const response = await authAPI.login(email, password, rememderme);
      dispatch(setUserIDAC(response.data.userId));
      dispatch(loginAC(true));
      // dispatch(setProfileInfoAC(response.data));
    } catch (e) {
      const err = e as Error | AxiosError<{ error: string }>;
      // handleNetworkError(dispatch, err);
    } finally {
      dispatch(appSetStatusAC("idle"));
    }
  };

export const logoutTC = (): AppThunk => async (dispatch) => {
  try {
    dispatch(appSetStatusAC("loading"));
    await authAPI.logout();
    dispatch(loginAC(false));
    dispatch(appSetErrorAC("You are not authorized"));
  } catch (e) {
    const err = e as Error | AxiosError<{ error: string }>;
    // handleNetworkError(dispatch, err);
  } finally {
    dispatch(appSetStatusAC("idle"));
  }
};

// ==== SELECTORS ====

export const isLoggedInSelector = (state: AppRootStateType) =>
  state.authReducer.isLoggedIn;

export const userIDSelector = (state: AppRootStateType) =>
  state.authReducer.userID;

export const selectResponseMessage = (state: AppRootStateType) =>
  state.authReducer.responseMessage;

// ==== TYPES ====

export type InitialStateType = typeof initialState;

export type LoginType = ReturnType<typeof loginAC>;
export type SetUserType = ReturnType<typeof setUserIDAC>;

export type AuthActionsType = LoginType | SetUserType;

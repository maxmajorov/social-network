import {
  AUTHORIZE_ME,
  AuthorizeActionsType,
  STOP_AUTH,
} from "./../actions/auth-actions";

export type initialStateType = {
  id: number | null;
  email: string | null;
  login: string | null;
  isAuth: boolean;
  responseMessage: string;
};

const initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  responseMessage: "",
};

export const authReducer = (
  state: initialStateType = initialState,
  action: AuthorizeActionsType
): initialStateType => {
  switch (action.type) {
    case AUTHORIZE_ME: {
      return {
        ...state,
        ...action.payload,
      };
    }

    case STOP_AUTH: {
      return {
        ...state,
        responseMessage: action.responseMessage,
      };
    }
    default: {
      return state;
    }
  }
};

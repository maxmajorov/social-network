import { AUTHORIZE_ME, AuthorizeActionsType } from "./../actions/auth-actions";

export type initialStateType = {
  id: number;
  email: string;
  login: string;
  isAuth: boolean;
};

const initialState = {
  id: 0,
  email: "",
  login: "",
  isAuth: false,
};

export const authReducer = (
  state: initialStateType = initialState,
  action: AuthorizeActionsType
): initialStateType => {
  switch (action.type) {
    case AUTHORIZE_ME: {
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };
    }
    default: {
      return state;
    }
  }
};

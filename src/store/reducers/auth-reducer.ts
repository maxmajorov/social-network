import { AUTHORIZE_ME, AuthorizeActionsType } from "./../actions/auth-actions";

export type initialStateType = {
  id: number | null;
  email: string | null;
  login: string | null;
  isAuth: boolean;
};

const initialState = {
  id: null,
  email: null,
  login: null,
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
        ...action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

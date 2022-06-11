export const AUTHORIZE_ME = "AUTHORIZE-ME";
export const STOP_AUTH = "STOP-AUTH";

export const authorizeMeAC = (
  id: number | null,
  email: string | null,
  login: string | null,
  isAuth: boolean
) =>
  ({
    type: AUTHORIZE_ME,
    payload: {
      id,
      email,
      login,
      isAuth,
    },
  } as const);

export const stopAuthorizationAC = (responseMessage: string) =>
  ({
    type: STOP_AUTH,
    responseMessage,
  } as const);

export type AuthorizeActionsType =
  | ReturnType<typeof authorizeMeAC>
  | ReturnType<typeof stopAuthorizationAC>;

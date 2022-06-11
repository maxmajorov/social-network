export const AUTHORIZE_ME = "AUTHORIZE-ME";

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

export type AuthorizeActionsType = ReturnType<typeof authorizeMeAC>;

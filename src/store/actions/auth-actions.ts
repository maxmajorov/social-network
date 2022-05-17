export const AUTHORIZE_ME = "AUTHORIZE-ME";

export type AuthorizeActionsType = AuthorizeMeACType;

type AuthorizeMeACType = {
  type: typeof AUTHORIZE_ME;
  data: {
    id: number;
    email: string;
    login: string;
  };
};
export const authorizeMeAC = (data: {
  id: number;
  email: string;
  login: string;
}): AuthorizeMeACType => ({
  type: AUTHORIZE_ME,
  data: data,
});

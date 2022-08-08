// ==== TYPES ====

export type CaptchaResponseType = {
  url: string;
};

export type UsersFromServerType = {
  id: number;
  followed: boolean;
  name: string;
  photos: {
    large: string | null;
    small: string | null;
  };
  uniqueUrlName: string | null;
  status: string;
};

export type UsersResponseType = {
  items: Array<UsersFromServerType>;
  totalCount: number;
  error: string;
};

// ==== PROFILE ====

export type ProfileResponseType = {
  userId: number;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  contacts: {
    github: string;
    vk: string;
    facebook: string;
    instagram: string;
    twitter: string;
    website: string;
    youtube: string;
    mainLink: string;
  };
  photos: {
    small: string;
    large: string;
  };
};

export type ProfileStatusResponseType = {
  resultCode: number;
  messages: Array<string>;
  data: {};
};

// ==== AUTHORIZATION ====

export type AuthResponseType = {
  data: LoginInfo;
  resultCode: number;
  messages: Array<any>;
};

export type LoginInfo = {
  id: number;
  email: string;
  login: string;
};

export type LoginResponseType = {
  resultCode: number;
  messages: any[];
  data: {
    userId: number;
  };
};

export type LogoutResponseType = {
  resultCode: number;
  messages: any[];
  data: {};
};

// ==== FOLLOW ====

export type FollowResponseType = {
  resultCode: number;
  data: any;
  messages: Array<string>;
};

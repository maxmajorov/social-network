import axios from "axios";
import { Params } from "react-router";

export const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: { "API-KEY": "196d543e-854d-4840-b68c-b0f81150459a" },
  withCredentials: true,
});

// ==== USERS ====

export const usersAPI = {
  getUsers(currentPage: number, pageSize: number) {
    return instance
      .get<UsersResponseType>(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },
  follow(userID: string) {
    return instance.post<FollowResponseType>(`follow/${userID}`);
  },

  unfollow(userID: string) {
    return instance.delete<FollowResponseType>(`follow/${userID}`);
  },
};

// ==== PROFILE ====

export const profileAPI = {
  getMyProfile() {
    return instance
      .get<ProfileResponseType>(`profile/23584`)
      .then((response) => response.data);
  },

  getUserProfile(params: Params<string>) {
    return instance
      .get<ProfileResponseType>(`profile/${params.userId}`)
      .then((response) => response.data);
  },

  getProfileStatus(params: Params<string>) {
    return instance
      .get<string>(`profile/status/${params.userId}`)
      .then((response) => response.data);
  },

  updateProfileStatus(status: string) {
    return instance
      .put<ProfileStatusResponseType>(`profile/status`, { status: status })
      .then((response) => response.data);
  },
};

// ==== AUTH ====

export const authAPI = {
  authMe() {
    return instance
      .get<AuthResponseType>(`auth/me`, {
        withCredentials: true, // При кроссдоменности
      })
      .then((response) => response.data);
  },

  login(email: string, password: string, rememberMe: boolean = false) {
    return instance
      .post<LoginResponseType>(`auth/login`, { email, password, rememberMe })
      .then((response) => response.data);
  },

  logout() {
    return instance
      .delete<LogoutResponseType>(`auth/login`)
      .then((response) => response.data);
  },
};
// ==== TYPES ====

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

type ProfileStatusResponseType = {
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

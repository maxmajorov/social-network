import axios from "axios";

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
  status: boolean | null;
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

// ==== FOLLOW ====
export type FollowResponseType = {
  resultCode: number;
  data: any;
  messages: Array<string>;
};

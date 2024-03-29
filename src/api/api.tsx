import axios from "axios";
import { Params } from "react-router";
import {
  AuthResponseType,
  CaptchaResponseType,
  FollowResponseType,
  LoginResponseType,
  LogoutResponseType,
  ProfileResponseType,
  ProfileStatusResponseType,
  UsersResponseType,
} from "./types";

export const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: { "API-KEY": "196d543e-854d-4840-b68c-b0f81150459a" },
  withCredentials: true,
});

// ==== SECURITY ====

export const securityAPI = {
  getCaptcha() {
    return instance
      .get<CaptchaResponseType>(`security/get-captcha-url`)
      .then((response) => response.data);
  },
};

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

  setProfileAvatar(photo: any) {
    const formData = new FormData();
    formData.append("image", photo);

    return instance
      .put<ProfileStatusResponseType>(`profile/photo`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => response.data);
  },

  updateProfileStatus(status: string) {
    return instance
      .put<ProfileStatusResponseType>(`profile/status`, { status: status })
      .then((response) => response.data);
  },

  updateUserContact(profile: any) {
    return instance
      .put<ProfileStatusResponseType>(`profile`, profile)
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

  login(
    email: string,
    password: string,
    rememberMe: boolean = false,
    captcha: string
  ) {
    return instance
      .post<LoginResponseType>(`auth/login`, {
        email,
        password,
        rememberMe,
        captcha,
      })
      .then((response) => response.data);
  },

  logout() {
    return instance
      .delete<LogoutResponseType>(`auth/login`)
      .then((response) => response.data);
  },
};

import axios from "axios";
import { profile_type, user_type } from "types/types";

export enum resultCodes_enum {
  Success = 0,
  Error = 1,
}

export enum resultCodeForCatcha_enum {
  CaptchaIsRequired = 10,
}

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0",
  headers: {
    "API-KEY": "1d74addd-3c4c-4a0f-abd7-dfebd728b911",
  },
});

type getUsersResponse_type = {
  items: Array<user_type>;
  totalCount: number;
  error: string | null;
};
type followUnfollowUserSuccessResponse_type = {
  resultCode: resultCodes_enum;
  messages: Array<string>;
  data: {};
};

export const usersAPI = {
  getUsers(currentPage: number = 1, pageSize: number = 15) {
    return instance
      .get<getUsersResponse_type>(
        `/users?page=${currentPage}&count=${pageSize}`
      )
      .then((response) => response.data);
  },

  followUserSuccess(userId: number) {
    return instance
      .post<followUnfollowUserSuccessResponse_type>(`/follow/${userId}`)
      .then((response) => response.data);
  },

  unfollowUserSuccess(userId: number) {
    return instance
      .delete<followUnfollowUserSuccessResponse_type>(`/follow/${userId}`)
      .then((response) => response.data);
  },

  getUserProfile(userId: number) {
    console.warn("Obsolete method. Please use profileAPI object.");
    return profileAPI.getUserProfile(userId);
  },
};

type updateUserStatusResponse_type = {
  resultCode: resultCodes_enum;
  messages: Array<string>;
  data: {};
};
type updateUserPhotoResponse_type = {
  resultCode: resultCodes_enum;
  messages: Array<string>;
  data: {
    small: string | null;
    large: string | null;
  };
};
type updateUserProfileResponse_type = {
  resultCode: resultCodes_enum;
  messages: Array<string>;
  data: {};
};

export const profileAPI = {
  getUserProfile(userId: number) {
    return instance
      .get<profile_type>(`/profile/${userId}`)
      .then((response) => response.data);
  },

  getUserStatus(userId: number) {
    return instance
      .get<string>(`/profile/status/${userId}`)
      .then((response) => response.data);
  },

  updateUserStatus(status: string) {
    return instance
      .put<updateUserStatusResponse_type>(`/profile/status/`, { status })
      .then((response) => response.data);
  },

  updateUserPhoto(formData: FormData) {
    return instance
      .put<updateUserPhotoResponse_type>(`/profile/photo/`, formData)
      .then((response) => response.data);
  },

  updateUserProfile(profile: profile_type) {
    return instance
      .put<updateUserProfileResponse_type>(`/profile/`, profile)
      .then((response) => response.data);
  },
};

type meResponse_type = {
  data: {
    id: number;
    email: string;
    login: string;
  };
  resultCode: resultCodes_enum;
  messages: Array<string>;
};

type loginResponse_type = {
  resultCode: resultCodes_enum | resultCodeForCatcha_enum;
  messages: Array<string>;
  data: {};
};

type logoutResponse_type = {
  resultCode: resultCodes_enum;
  messages: Array<string>;
  data: {};
};

type getCaptchaUrlResponse_type = {
  url: string;
};

export const authAPI = {
  me() {
    return instance
      .get<meResponse_type>(`/auth/me`)
      .then((response) => response.data);
  },

  login(
    email: string,
    password: string,
    rememberMe: boolean = false,
    captcha: string | null
  ) {
    return instance
      .post<loginResponse_type>(`/auth/login`, {
        email,
        password,
        rememberMe,
        captcha,
      })
      .then((response) => response.data);
  },

  logout() {
    return instance
      .delete<logoutResponse_type>(`/auth/login`)
      .then((response) => response.data);
  },

  getCaptchaUrl() {
    return instance
      .get<getCaptchaUrlResponse_type>(`/security/get-captcha-url`)
      .then((response) => response.data);
  },
};

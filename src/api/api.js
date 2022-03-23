import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0",
  headers: {
    "API-KEY": "1d74addd-3c4c-4a0f-abd7-dfebd728b911",
  },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 15) {
    return instance
      .get(`/users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },

  followUserSuccess(userId) {
    return instance.post(`/follow/${userId}`).then((response) => response.data);
  },

  unfollowUserSuccess(userId) {
    return instance
      .delete(`/follow/${userId}`)
      .then((response) => response.data);
  },

  getUserProfile(userId) {
    return instance.get(`/profile/${userId}`).then((response) => response.data);
  },
};

export const authAPI = {
  me() {
    return instance.get(`/auth/me`).then((response) => response.data);
  },
};

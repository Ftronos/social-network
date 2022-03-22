import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0",
  headers: {
    "API-KEY": "1d74addd-3c4c-4a0f-abd7-dfebd728b911",
  },
});

export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return instance
      .get(`/users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },

  followUser(userId) {
    return instance.post(`/follow/${userId}`).then((response) => response.data);
  },

  unfollowUser(userId) {
    return instance
      .delete(`/follow/${userId}`)
      .then((response) => response.data);
  },
};

import { createSelector } from "reselect";
import { AppState_type } from "redux/redux-store";

const getUsersSelector = (state: AppState_type) => state.usersPage.users;
export const getPageUsers = createSelector(getUsersSelector, (users) => {
  return users.filter((u) => true);
});
export const gePageSize = (state: AppState_type) => state.usersPage.pageSize;
export const getTotalUsersCount = (state: AppState_type) =>
  state.usersPage.totalUsersCount;
export const getCurrentPage = (state: AppState_type) =>
  state.usersPage.currentPage;
export const getFollowText = (state: AppState_type) =>
  state.usersPage.followText;
export const getUnfollowText = (state: AppState_type) =>
  state.usersPage.unfollowText;
export const getShowMoreBtnText = (state: AppState_type) =>
  state.usersPage.showMoreBtnText;
export const getIsFetching = (state: AppState_type) =>
  state.usersPage.isFetching;
export const getFollowingInProgress = (state: AppState_type) =>
  state.usersPage.followingInProgress;

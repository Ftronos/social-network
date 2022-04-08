import { createSelector } from "reselect";

const getUsersSelector = (state) => state.usersPage.users;
export const getPageUsers = createSelector(getUsersSelector, (users) => {
  return users.filter((u) => true);
});
export const gePageSize = (state) => state.usersPage.pageSize;
export const getTotalUsersCount = (state) => state.usersPage.totalUsersCount;
export const getCurrentPage = (state) => state.usersPage.currentPage;
export const getFollowText = (state) => state.usersPage.followText;
export const getUnfollowText = (state) => state.usersPage.unfollowText;
export const getShowMoreBtnText = (state) => state.usersPage.showMoreBtnText;
export const getIsFetching = (state) => state.usersPage.isFetching;
export const getFollowingInProgress = (state) =>
  state.usersPage.followingInProgress;

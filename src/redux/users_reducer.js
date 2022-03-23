import { usersAPI } from "api/api";

const FOLLOW_USER = "FOLLOW_USER";
const UNFOLLOW_USER = "UNFOLLOW_USER";
const SET_USERS = "SET-USERS";
const SET_TOTAL_PAGES_COUNT = "SET-TOTAL-PAGES-COUNT";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE-IS-FOLLOWING-PROGRESS";

let initialState = {
  users: [],
  followText: "Follow",
  unfollowText: "Unfollow",
  showMoreBtnText: "Show more",
  totalUsersCount: 0,
  pageSize: 15,
  currentPage: 1,
  isFetching: true,
  followingInProgress: [2, 3, 4, 5],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW_USER: {
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.userId ? { ...user, followed: true } : user
        ),
      };
    }

    case UNFOLLOW_USER: {
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.userId ? { ...user, followed: false } : user
        ),
      };
    }

    case SET_USERS: {
      return {
        ...state,
        users: [...action.users],
      };
    }

    case SET_TOTAL_PAGES_COUNT: {
      return {
        ...state,
        totalUsersCount: action.pageCount,
      };
    }

    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.pageNumber,
      };
    }

    case TOGGLE_IS_FETCHING: {
      return {
        ...state,
        isFetching: action.isFetching,
      };
    }

    case TOGGLE_IS_FOLLOWING_PROGRESS: {
      return {
        ...state,
        followingInProgress: state.followingInProgress.includes(action.userId)
          ? [...state.followingInProgress.filter((id) => id !== action.userId)]
          : [...state.followingInProgress, action.userId],
      };
    }

    default: {
      return state;
    }
  }
};

export const followUserSuccess = (id) => ({
  type: FOLLOW_USER,
  userId: id,
});

export const unfollowUserSuccess = (id) => ({
  type: UNFOLLOW_USER,
  userId: id,
});

export const setUsers = (users) => ({
  type: SET_USERS,
  users,
});

export const setTotalPagesCount = (pageCount) => ({
  type: SET_TOTAL_PAGES_COUNT,
  pageCount,
});

export const setCurrentPage = (pageNumber) => ({
  type: SET_CURRENT_PAGE,
  pageNumber,
});

export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});

export const toggleFollowingProgress = (userId) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  userId,
});

export const getUsers = (currentPage, pageSize) => (dispatch) => {
  dispatch(toggleIsFetching(true));

  usersAPI.getUsers(currentPage, pageSize).then((data) => {
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalPagesCount(data.totalCount));
  });
};

export const followUser = (userId) => (dispatch) => {
  dispatch(toggleFollowingProgress(userId));

  usersAPI.followUserSuccess(userId).then((data) => {
    dispatch(toggleFollowingProgress(userId));
    if (data.resultCode === 0) {
      dispatch(followUserSuccess(userId));
    }
  });
};

export const unfollowUser = (userId) => (dispatch) => {
  dispatch(toggleFollowingProgress(userId));

  usersAPI.unfollowUserSuccess(userId).then((data) => {
    dispatch(toggleFollowingProgress(userId));
    if (data.resultCode === 0) {
      dispatch(unfollowUserSuccess(userId));
    }
  });
};

export default usersReducer;

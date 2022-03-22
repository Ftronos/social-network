const FOLLOW_USER = "FOLLOW_USER";
const UNFOLLOW_USER = "UNFOLLOW_USER";
const SET_USERS = "SET-USERS";
const SET_TOTAL_PAGES_COUNT = "SET-TOTAL-PAGES-COUNT";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";

let initialState = {
  users: [],
  followText: "Follow",
  unfollowText: "Unfollow",
  showMoreBtnText: "Show more",
  totalUsersCount: 0,
  pageSize: 5,
  currentPage: 1,
  isFetching: true,
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

    default: {
      return state;
    }
  }
};

export const followUserAC = (id) => {
  return {
    type: FOLLOW_USER,
    userId: id,
  };
};

export const unfollowUserAC = (id) => {
  return {
    type: UNFOLLOW_USER,
    userId: id,
  };
};

export const setUsersAC = (users) => {
  return {
    type: SET_USERS,
    users,
  };
};

export const setTotalPagesAC = (pageCount) => {
  return {
    type: SET_TOTAL_PAGES_COUNT,
    pageCount,
  };
};

export const setCurrentPageAC = (pageNumber) => {
  return {
    type: SET_CURRENT_PAGE,
    pageNumber,
  };
};

export const toggleIsFetchingAC = (isFetching) => {
  return {
    type: TOGGLE_IS_FETCHING,
    isFetching,
  };
};

export default usersReducer;

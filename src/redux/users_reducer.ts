import { resultCodes_enum, usersAPI } from "api/api";
import { ThunkAction } from "redux-thunk";
import { AppState_type, InferActionsTypes } from "redux/redux-store";
import { user_type } from "types/types";
import { setGlobalError_tc } from "./app_reducer";

let initialState = {
  users: [] as Array<user_type>,
  followText: "Follow" as string,
  unfollowText: "Unfollow" as string,
  showMoreBtnText: "Show more" as string,
  totalUsersCount: 0 as number,
  pageSize: 15 as number,
  currentPage: 1 as number,
  isFetching: true as boolean,
  followingInProgress: [] as Array<number>, // Array of users id
};

export type initialState_type = typeof initialState;

const usersReducer = (
  state = initialState,
  action: actions_types
): initialState_type => {
  switch (action.type) {
    case "FOLLOW_USER": {
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.userId ? { ...user, followed: true } : user
        ),
      };
    }

    case "UNFOLLOW_USER": {
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.userId ? { ...user, followed: false } : user
        ),
      };
    }

    case "SET_USERS": {
      return {
        ...state,
        users: [...action.users],
      };
    }

    case "SET_TOTAL_PAGES_COUNT": {
      return {
        ...state,
        totalUsersCount: action.pageCount,
      };
    }

    case "SET_CURRENT_PAGE": {
      return {
        ...state,
        currentPage: action.pageNumber,
      };
    }

    case "TOGGLE_IS_FETCHING": {
      return {
        ...state,
        isFetching: action.isFetching,
      };
    }

    case "TOGGLE_IS_FOLLOWING_PROGRESS": {
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

type actions_types = InferActionsTypes<typeof usersActions>;

export const usersActions = {
  followUserSuccess: (id: number) =>
    ({
      type: "FOLLOW_USER",
      userId: id,
    } as const),

  unfollowUserSuccess: (id: number) =>
    ({
      type: "UNFOLLOW_USER",
      userId: id,
    } as const),

  setUsers: (users: Array<user_type>) =>
    ({
      type: "SET_USERS",
      users,
    } as const),

  setTotalPagesCount: (pageCount: number) =>
    ({
      type: "SET_TOTAL_PAGES_COUNT",
      pageCount,
    } as const),

  setCurrentPage: (pageNumber: number) =>
    ({
      type: "SET_CURRENT_PAGE",
      pageNumber,
    } as const),

  toggleIsFetching: (isFetching: boolean) =>
    ({
      type: "TOGGLE_IS_FETCHING",
      isFetching,
    } as const),

  toggleUserFollowingProgress: (userId: number) =>
    ({
      type: "TOGGLE_IS_FOLLOWING_PROGRESS",
      userId,
    } as const),
};

export type getState_type = () => AppState_type;
type thunk_type = ThunkAction<
  Promise<void>,
  AppState_type,
  unknown,
  actions_types
>;

export const getUsers =
  (currentPage: number, pageSize: number): thunk_type =>
  async (dispatch) => {
    dispatch(usersActions.toggleIsFetching(true));

    try {
      let data = await usersAPI.getUsers(currentPage, pageSize);

      dispatch(usersActions.toggleIsFetching(false));
      dispatch(usersActions.setUsers(data.items));
      dispatch(usersActions.setTotalPagesCount(data.totalCount));
    } catch (error: any) {
      dispatch(setGlobalError_tc(error.message));
    }
  };

export const followUser =
  (userId: number): thunk_type =>
  async (dispatch) => {
    dispatch(usersActions.toggleUserFollowingProgress(userId));

    try {
      let data = await usersAPI.followUserSuccess(userId);

      dispatch(usersActions.toggleUserFollowingProgress(userId));
      if (data.resultCode === resultCodes_enum.Success) {
        dispatch(usersActions.followUserSuccess(userId));
      }
    } catch (error: any) {
      dispatch(setGlobalError_tc(error.message));
    }
  };

export const unfollowUser =
  (userId: number): thunk_type =>
  async (dispatch) => {
    dispatch(usersActions.toggleUserFollowingProgress(userId));

    try {
      let data = await usersAPI.unfollowUserSuccess(userId);

      dispatch(usersActions.toggleUserFollowingProgress(userId));
      if (data.resultCode === resultCodes_enum.Success) {
        dispatch(usersActions.unfollowUserSuccess(userId));
      }
    } catch (error: any) {
      dispatch(setGlobalError_tc(error.message));
    }
  };

export default usersReducer;

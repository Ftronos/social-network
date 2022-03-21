const FOLLOW_USER = "FOLLOW_USER";
const UNFOLLOW_USER = "UNFOLLOW_USER";
const SET_USERS = "SET-USERS";

let initialState = {
  users: [],
  followText: "Follow",
  unfollowText: "Unfollow",
  showMoreBtnText: "Show more",
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW_USER: {
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.userId ? { ...user, isFollowed: true } : user
        ),
      };
    }

    case UNFOLLOW_USER: {
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.userId ? { ...user, isFollowed: false } : user
        ),
      };
    }

    case SET_USERS: {
      return {
        ...state,
        users: [...state.users, ...action.users],
      };
    }

    default: {
      return state;
    }
  }
};

export const followUserActionCreator = (id) => {
  return {
    type: FOLLOW_USER,
    userId: id,
  };
};

export const unfollowUserActionCreator = (id) => {
  return {
    type: UNFOLLOW_USER,
    userId: id,
  };
};

export const setUsersActionCreator = (users) => {
  return {
    type: SET_USERS,
    users,
  };
};

export default usersReducer;

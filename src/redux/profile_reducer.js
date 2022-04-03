import { usersAPI, profileAPI } from "api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_STATUS = "SET-USER-STATUS";

let initialState = {
  myPosts: [
    { id: 1, text: "Hello!" },
    { id: 2, text: "How are you?" },
    { id: 3, text: "Thanks, fine!" },
  ],
  profile: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      if (!action.newPostText) {
        console.error("Empty post text");

        return state;
      }

      return {
        ...state,
        myPosts: [
          ...state.myPosts,
          {
            id: state.myPosts.length + 1,
            text: action.newPostText,
          },
        ],
      };
    }

    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }

    case SET_STATUS: {
      return { ...state, status: action.status };
    }

    default: {
      return state;
    }
  }
};

export const addPost_ac = (newPostText) => ({
  type: ADD_POST,
  newPostText,
});

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export const setUserStatus = (status) => ({
  type: SET_STATUS,
  status,
});

export const getProfile = (userId) => (dispatch) => {
  usersAPI.getUserProfile(userId).then((data) => {
    dispatch(setUserProfile(data));
  });
};

export const getStatus = (userId) => (dispatch) => {
  profileAPI.getUserStatus(userId).then((data) => {
    dispatch(setUserStatus(data));
  });
};

export const updateStatus = (status) => (dispatch) => {
  profileAPI.updateUserStatus(status).then((data) => {
    if (data.resultCode === 0) {
      dispatch(setUserStatus(status));
    }
  });
};

export default profileReducer;

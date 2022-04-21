import { usersAPI, profileAPI } from "api/api";

const ADD_POST = "ADD-POST";
const DELETE_POST = "DELETE-POST";
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

    case DELETE_POST: {
      return {
        ...state,
        myPosts: state.myPosts.filter((post) => post.id !== action.postId),
      };
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

export const deletePost_ac = (postId) => ({
  type: DELETE_POST,
  postId,
});

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export const setUserStatus = (status) => ({
  type: SET_STATUS,
  status,
});

export const getProfile = (userId) => async (dispatch) => {
  let data = await usersAPI.getUserProfile(userId);
  dispatch(setUserProfile(data));
};

export const getStatus = (userId) => async (dispatch) => {
  let data = await profileAPI.getUserStatus(userId);
  dispatch(setUserStatus(data));
};

export const updateStatus = (status) => async (dispatch) => {
  let data = await profileAPI.updateUserStatus(status);
  if (data.resultCode === 0) {
    dispatch(setUserStatus(status));
  }
};

export default profileReducer;

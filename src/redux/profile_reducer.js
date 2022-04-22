import { usersAPI, profileAPI } from "api/api";
import { stopSubmit } from "redux-form";
import { toLowerCaseFirstLetter } from "./../utils/heplers/helpers";

const ADD_POST = "ADD-POST";
const DELETE_POST = "DELETE-POST";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_STATUS = "SET-USER-STATUS";
const SET_PHOTOS = "SET-PHOTOS";

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

    case SET_PHOTOS: {
      return { ...state, profile: { ...state.profile, photos: action.photos } };
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

export const setUserPhoto_ac = (photos) => ({
  type: SET_PHOTOS,
  photos,
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

export const updateMainPhoto = (photo) => async (dispatch) => {
  const formData = new FormData();
  formData.append("image", photo);

  let data = await profileAPI.updateUserPhoto(formData);

  if (data.resultCode === 0) {
    dispatch(setUserPhoto_ac(data.data.photos));
  }
};

export const saveProfile = (profile) => async (dispatch, getState) => {
  const userId = getState().auth.userId;

  let data = await profileAPI.updateUserProfile(profile);

  if (data.resultCode === 0) {
    dispatch(getProfile(userId));
  } else {
    let errorMessage =
      data.messages.length > 0 ? data.messages[0] : "Some error";

    let errorField = errorMessage.match(/\(.*\)/g)[0].slice(1, -1);
    const errorObject = {};

    if (errorField.split("->")[1]) {
      errorField = toLowerCaseFirstLetter(errorField.split("->")[1]);

      errorObject["contacts"] = {};
      errorObject["contacts"][errorField] = errorMessage;
    } else {
      errorField = toLowerCaseFirstLetter(errorField.split("->")[0]);

      errorObject[errorField] = errorMessage;
    }

    dispatch(stopSubmit("editProfileForm", errorObject));
    return Promise.reject(errorMessage);
  }
};

export default profileReducer;

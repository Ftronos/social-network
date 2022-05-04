import { profileAPI, usersAPI } from "api/api";
import { stopSubmit } from "redux-form";
import { toLowerCaseFirstLetter } from "../utils/heplers/helpers";
import { setGlobalError_tc } from "./app_reducer";
import { AnyAction } from "redux";

const ADD_POST = "ADD-POST";
const DELETE_POST = "DELETE-POST";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_STATUS = "SET-USER-STATUS";
const SET_PHOTOS = "SET-PHOTOS";

type profile_type = {
  userId: number;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  contacts: {
    github: string;
    vk: string;
    facebook: string;
    instagram: string;
    twitter: string;
    website: string;
    youtube: string;
    mainLink: string;
  };
};

type photos_type = {
  large: string;
  small: string;
};

type post_type = {
  id: number;
  text: string;
};

type inititalState_type = {
  myPosts: Array<post_type>;
  profile: profile_type | null;
  status: string;
};

let initialState: inititalState_type = {
  myPosts: [
    { id: 1, text: "Hello!" },
    { id: 2, text: "How are you?" },
    { id: 3, text: "Thanks, fine!" },
  ],
  profile: null,
  status: "",
};

const profileReducer = (state = initialState, action: AnyAction) => {
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
        myPosts: state.myPosts.filter(
          (post: post_type) => post.id !== action.postId
        ),
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

type addPost_a_type = {
  type: typeof ADD_POST;
  newPostText: string;
};

export const addPost_ac: (newPostText: string) => addPost_a_type = (
  newPostText
) => ({
  type: ADD_POST,
  newPostText,
});

type deletePost_a_type = {
  type: typeof DELETE_POST;
  postId: number;
};

export const deletePost_ac: (postId: number) => deletePost_a_type = (
  postId
) => ({
  type: DELETE_POST,
  postId,
});

type setUserProfile_a_type = {
  type: typeof SET_USER_PROFILE;
  profile: profile_type;
};

export const setUserProfile: (
  profile: profile_type
) => setUserProfile_a_type = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

type setUserStatus_a_type = {
  type: typeof SET_STATUS;
  status: string;
};

export const setUserStatus: (status: string) => setUserStatus_a_type = (
  status
) => ({
  type: SET_STATUS,
  status,
});

type setUserPhoto_a_type = {
  type: typeof SET_PHOTOS;
  photos: photos_type;
};

export const setUserPhoto_ac: (photos: photos_type) => setUserPhoto_a_type = (
  photos
) => ({
  type: SET_PHOTOS,
  photos,
});

export const getProfile =
  (userId: number) => async (dispatch: (f: any) => void) => {
    try {
      let data = await usersAPI.getUserProfile(userId);

      dispatch(setUserProfile(data));
    } catch (error: any) {
      console.log(error);

      dispatch(setGlobalError_tc(error.message));
    }
  };

export const getStatus =
  (userId: number) => async (dispatch: (f: any) => void) => {
    try {
      let data = await profileAPI.getUserStatus(userId);
      dispatch(setUserStatus(data));
    } catch (error: object) {
      dispatch(setGlobalError_tc(error.message));
    }
  };

export const updateStatus =
  (status: string) => async (dispatch: (f: any) => void) => {
    try {
      let data = await profileAPI.updateUserStatus(status);
      if (data.resultCode === 0) {
        dispatch(setUserStatus(status));
      }
    } catch (error: any) {
      dispatch(setGlobalError_tc(error.message));
    }
  };

export const updateMainPhoto =
  (photo: object) => async (dispatch: (f: any) => void) => {
    const formData = new FormData();
    formData.append("image", photo);
    console.log(photo);

    try {
      let data = await profileAPI.updateUserPhoto(formData);

      if (data.resultCode === 0) {
        dispatch(setUserPhoto_ac(data.data.photos));
      }
    } catch (error: any) {
      dispatch(setGlobalError_tc(error.message));
    }
  };

export const saveProfile =
  (profile: profile_type) =>
  async (dispatch: (f: any) => void, getState: Function) => {
    const userId = getState().auth.userId;

    try {
      let data = await profileAPI.updateUserProfile(profile);

      if (data.resultCode === 0) {
        dispatch(getProfile(userId));
      } else {
        let errorMessage =
          data.messages.length > 0 ? data.messages[0] : "Some error";

        let errorField = errorMessage.match(/\(.*\)/g)[0].slice(1, -1);
        const errorObject: { [key: string]: any } = {};

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
    } catch (error: any) {
      dispatch(setGlobalError_tc(error.message));
    }
  };

export default profileReducer;

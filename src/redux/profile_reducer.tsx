import { profileAPI, resultCodes_enum, usersAPI } from "api/api";
import { FormAction, stopSubmit } from "redux-form";
import { ThunkAction } from "redux-thunk";
import { AppState_type, InferActionsTypes } from "redux/redux-store";
import { photos_type, post_type, profile_type } from "types/types";
import { toLowerCaseFirstLetter } from "../utils/heplers/helpers";
import { setGlobalError_tc } from "./app_reducer";

let initialState = {
  myPosts: [
    { id: 1, text: "Hello!" },
    { id: 2, text: "How are you?" },
    { id: 3, text: "Thanks, fine!" },
  ] as Array<post_type>,
  profile: null as profile_type | null,
  status: "" as string | null,
  newPostText: "Hello world!" as string | null,
};

export type initialState_type = typeof initialState;

const profileReducer = (
  state = initialState,
  action: Actions_types
): initialState_type => {
  switch (action.type) {
    case "ADD_POST": {
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

    case "SET_USER_PROFILE": {
      return { ...state, profile: action.profile };
    }

    case "SET_STATUS": {
      return { ...state, status: action.status };
    }

    case "DELETE_POST": {
      return {
        ...state,
        myPosts: state.myPosts.filter(
          (post: post_type) => post.id !== action.postId
        ),
      };
    }

    case "SET_PHOTOS": {
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos } as profile_type,
      };
    }

    default: {
      return state;
    }
  }
};

type Actions_types = InferActionsTypes<typeof propfileActions>;

export const propfileActions = {
  addPost_ac: (newPostText: string) =>
    ({
      type: "ADD_POST",
      newPostText,
    } as const),

  deletePost_ac: (postId: number) =>
    ({
      type: "DELETE_POST",
      postId,
    } as const),

  setUserProfile: (profile: profile_type) =>
    ({
      type: "SET_USER_PROFILE",
      profile,
    } as const),

  setUserStatus: (status: string) =>
    ({
      type: "SET_STATUS",
      status,
    } as const),

  setUserPhoto_ac: (photos: photos_type) =>
    ({
      type: "SET_PHOTOS",
      photos,
    } as const),
};

type Thunk_type = ThunkAction<
  Promise<void>,
  AppState_type,
  unknown,
  Actions_types
>;

export const getProfile =
  (userId: number): Thunk_type =>
  async (dispatch) => {
    try {
      let data = await usersAPI.getUserProfile(userId);

      dispatch(propfileActions.setUserProfile(data));
    } catch (error: any) {
      dispatch(setGlobalError_tc(error.message));
    }
  };

export const getStatus =
  (userId: number): Thunk_type =>
  async (dispatch) => {
    try {
      let data = await profileAPI.getUserStatus(userId);
      dispatch(propfileActions.setUserStatus(data));
    } catch (error: any) {
      dispatch(setGlobalError_tc(error.message));
    }
  };

export const updateStatus =
  (status: string): Thunk_type =>
  async (dispatch) => {
    try {
      let data = await profileAPI.updateUserStatus(status);
      if (data.resultCode === resultCodes_enum.Success) {
        dispatch(propfileActions.setUserStatus(status));
      }
    } catch (error: any) {
      dispatch(setGlobalError_tc(error.message));
    }
  };

export const updateMainPhoto =
  (photo: Blob): Thunk_type =>
  async (dispatch) => {
    const formData = new FormData();
    formData.append("image", photo);

    try {
      let data = await profileAPI.updateUserPhoto(formData);

      if (data.resultCode === resultCodes_enum.Success) {
        dispatch(
          propfileActions.setUserPhoto_ac({
            small: data.data.small,
            large: data.data.large,
          })
        );
      }
    } catch (error: any) {
      dispatch(setGlobalError_tc(error.message));
    }
  };

export const saveProfile =
  (
    profile: profile_type
  ): ThunkAction<
    Promise<void>,
    AppState_type,
    unknown,
    Actions_types | FormAction
  > =>
  async (dispatch, getState) => {
    const userId = getState().auth.userId;

    try {
      let data = await profileAPI.updateUserProfile(profile);

      if (data.resultCode === resultCodes_enum.Success) {
        if (userId) {
          dispatch(getProfile(userId));
        } else {
          dispatch(setGlobalError_tc("Пользователь не определен"));
        }
      } else {
        let errorMessage =
          data.messages.length > 0 ? data.messages[0] : "Some error";

        let errorField = "";

        if (errorMessage.match(/\(.*\)/g) !== null) {
          errorField = errorMessage[0].slice(1, -1);
        }

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

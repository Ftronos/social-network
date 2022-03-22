const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET-USER-PROFILE";

let initialState = {
  newPostText: "Hello!",
  myPosts: [
    { id: 1, text: "Hello!" },
    { id: 2, text: "How are you?" },
    { id: 3, text: "Thanks, fine!" },
  ],
  profile: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      if (!state.newPostText) {
        console.error("Empty post text");

        return false;
      }

      return {
        ...state,
        newPostText: "",
        myPosts: [
          ...state.myPosts,
          {
            id: state.myPosts.length + 1,
            text: state.newPostText,
          },
        ],
      };
    }

    case UPDATE_NEW_POST_TEXT: {
      return { ...state, newPostText: action.postMessage };
    }

    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }

    default: {
      return state;
    }
  }
};

export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};

export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    postMessage: text,
  };
};

export const setUserProfile = (profile) => {
  return {
    type: SET_USER_PROFILE,
    profile,
  };
};

export default profileReducer;

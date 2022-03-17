const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const profileReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST: {
      if (!state.newPostText) {
        console.error("Empty post text");

        return false;
      }

      state.myPosts.push({
        id: state.myPosts.length + 1,
        text: state.newPostText,
      });

      return state;
    }

    case UPDATE_NEW_POST_TEXT: {
      state.newPostText = action.postMessage;

      return state;
    }

    default: {
      console.error("Нет такого action");

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

export default profileReducer;

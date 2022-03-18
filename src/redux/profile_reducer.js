const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  newPostText: "Hello!",
  myPosts: [
    { id: 1, text: "Hello!" },
    { id: 2, text: "How are you?" },
    { id: 3, text: "Thanks, fine!" },
  ],
  user: {
    avatarSrc: "https://www.icloudunlock.org/img/team/team3.png",
    topImgSrc:
      "https://sun9-54.userapi.com/c841533/v841533506/17243/KspzninTAnE.jpg",
    name: "User 1",
    dateBirth: "01.01.2000",
    city: "г. Москва",
  },
};

const profileReducer = (state = initialState, action) => {
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

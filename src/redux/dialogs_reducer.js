const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
  newMessageText: "",
  dialogs: [
    { id: 1, name: "User 1" },
    { id: 2, name: "User 2" },
    { id: 3, name: "User 3" },
    { id: 4, name: "User 4" },
    { id: 5, name: "User 5" },
    { id: 6, name: "User 6" },
  ],
  messages: [
    { id: 1, text: "111", position: "left" },
    { id: 2, text: "222", position: "left" },
    { id: 3, text: "333", position: "right" },
    { id: 4, text: "444", position: "right" },
    { id: 5, text: "555", position: "left" },
  ],
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      if (!state.newMessageText) {
        console.error("Empty message text");

        return state;
      }

      state.messages.push({
        id: state.messages.length + 1,
        text: state.newMessageText,
      });

      return state;

    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.message;

      return state;

    default:
      return state;
  }
};

export const addMessageActionCreator = () => {
  return {
    type: ADD_MESSAGE,
  };
};

export const updateNewMessageTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_MESSAGE_TEXT,
    message: text,
  };
};

export default dialogsReducer;

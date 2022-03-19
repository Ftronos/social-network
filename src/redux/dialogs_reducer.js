const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
  newMessageText: "Hi!",
  dialogs: [
    { id: 1, name: "User 1" },
    { id: 2, name: "User 2" },
    { id: 3, name: "User 3" },
    { id: 4, name: "User 4" },
    { id: 5, name: "User 5" },
    { id: 6, name: "User 6" },
  ],
  messages: [
    { id: 1, text: "Hello!", position: "left" },
    { id: 2, text: "How are u?!", position: "left" },
    { id: 3, text: "Hy!", position: "right" },
    { id: 4, text: "I'm fine thnx :)", position: "right" },
    { id: 5, text: ";)", position: "left" },
  ],
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      if (!state.newMessageText) {
        console.error("Empty message text");

        return state;
      }

      return {
        ...state,
        newMessageText: "",
        messages: [
          ...state.messages,
          {
            id: state.messages.length + 1,
            text: state.newMessageText,
          },
        ],
      };

    case UPDATE_NEW_MESSAGE_TEXT:
      return { ...state, newMessageText: action.message };

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

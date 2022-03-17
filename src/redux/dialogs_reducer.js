const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

const dialogsReducer = (state, action) => {
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
      console.error("Нет такого action");

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

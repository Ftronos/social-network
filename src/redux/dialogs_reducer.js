const ADD_MESSAGE = "ADD-MESSAGE";

let initialState = {
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
      if (!action.newMessageText) {
        console.error("Empty message text");

        return state;
      }

      return {
        ...state,
        messages: [
          ...state.messages,
          {
            id: state.messages.length + 1,
            text: action.newMessageText,
          },
        ],
      };

    default:
      return state;
  }
};

export const addMessageActionCreator = (newMessageText) => {
  return {
    type: ADD_MESSAGE,
    newMessageText,
  };
};

export default dialogsReducer;

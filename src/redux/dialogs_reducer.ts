import { dialog_type, message_type } from "types/types";
import { InferActionsTypes } from "redux/redux-store";

let initialState = {
  dialogs: [
    { id: 1, name: "User 1" },
    { id: 2, name: "User 2" },
    { id: 3, name: "User 3" },
    { id: 4, name: "User 4" },
    { id: 5, name: "User 5" },
    { id: 6, name: "User 6" },
  ] as Array<dialog_type>,
  messages: [
    { id: 1, text: "Hello!", position: "left" },
    { id: 2, text: "How are u?!", position: "left" },
    { id: 3, text: "Hy!", position: "right" },
    { id: 4, text: "I'm fine thnx :)", position: "right" },
    { id: 5, text: ";)", position: "left" },
  ] as Array<message_type>,
};

export type initialState_type = typeof initialState;

const dialogsReducer = (
  state = initialState,
  action: Actions_types
): initialState_type => {
  switch (action.type) {
    case "ADD_MESSAGE":
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
            position: "right",
          },
        ],
      };

    default:
      return state;
  }
};

type Actions_types = InferActionsTypes<typeof dialogsActions>;

export const dialogsActions = {
  addMessage_ac: (newMessageText: string) =>
    ({
      type: "ADD_MESSAGE",
      newMessageText,
    } as const),
};

export default dialogsReducer;

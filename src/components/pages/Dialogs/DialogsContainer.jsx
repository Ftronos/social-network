import Dialogs from "./Dialogs";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "redux/dialogs_reducer";
import StoreContext from "storeContext";

const DialogsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const state = store.getState().dialogsPage;

        const addMessage = () => {
          store.dispatch(addMessageActionCreator());
        };

        const onMessageChange = (text) => {
          let action = updateNewMessageTextActionCreator(text);

          store.dispatch(action);
        };

        return (
          <Dialogs
            dialogs={state.dialogs}
            messages={state.messages}
            addMessage={addMessage}
            onMessageChange={onMessageChange}
            newMessageText={state.newMessageText}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;

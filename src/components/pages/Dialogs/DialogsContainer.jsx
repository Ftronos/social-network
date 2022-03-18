import Dialogs from "./Dialogs";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "redux/dialogs_reducer";

const DialogsContainer = (props) => {
  const state = props.store.getState().dialogsPage;

  const addMessage = () => {
    props.store.dispatch(addMessageActionCreator());
  };

  const onMessageChange = (text) => {
    let action = updateNewMessageTextActionCreator(text);

    props.store.dispatch(action);
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
};

export default DialogsContainer;

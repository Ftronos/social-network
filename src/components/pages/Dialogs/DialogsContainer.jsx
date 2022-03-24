import Dialogs from "./Dialogs";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "redux/dialogs_reducer";
import { connect } from "react-redux";
import WithAuthRedirect from "./../../HOC/WithAuthRedirect";

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => {
      dispatch(addMessageActionCreator());
    },
    onMessageChange: (text) => {
      dispatch(updateNewMessageTextActionCreator(text));
    },
  };
};

const DialogsContainer = WithAuthRedirect(
  connect(mapStateToProps, mapDispatchToProps)(Dialogs)
);

export default DialogsContainer;

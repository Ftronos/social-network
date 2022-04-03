import Dialogs from "./Dialogs";
import { addMessageActionCreator } from "redux/dialogs_reducer";
import { connect } from "react-redux";
import WithAuthRedirect from "./../../HOC/WithAuthRedirect";
import { compose } from "redux";

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addMessage: (newMessageText) => {
      dispatch(addMessageActionCreator(newMessageText));
    },
  };
};

export default compose(
  WithAuthRedirect,
  connect(mapStateToProps, mapDispatchToProps)
)(Dialogs);

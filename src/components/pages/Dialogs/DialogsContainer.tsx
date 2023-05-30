import Dialogs from "./Dialogs";
import { dialogsActions } from "redux/dialogs_reducer";
import { connect } from "react-redux";
import WithAuthRedirect from "../../HOC/WithAuthRedirect";
import { compose } from "redux";
import { AppState_type } from "redux/redux-store";
import { dialog_type, message_type } from "types/types";

type MapStateProps_type = {
  dialogs: Array<dialog_type>;
  messages: Array<message_type>;
};
type MapDispatchProps_type = {};
type OwnProps_type = {};

const mapStateToProps = (state: AppState_type): MapStateProps_type => ({
  dialogs: state.dialogsPage.dialogs,
  messages: state.dialogsPage.messages,
});

export default compose(
  WithAuthRedirect,
  connect<
    MapStateProps_type,
    MapDispatchProps_type,
    OwnProps_type,
    AppState_type
  >(mapStateToProps, {
    addMessage: dialogsActions.addMessage_ac,
  })
)(Dialogs);

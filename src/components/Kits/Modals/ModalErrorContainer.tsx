import ModalError from "./ModalError";
import { connect } from "react-redux";
import { getGlobalErrors } from "redux/selectors/app-selectors";
import c from "./ModalError.module.css";
import { AppState_type } from "redux/redux-store";

type MapStateProps_type = {
  errors: Array<string>;
};
type MapDispatchProps_type = {};
type OwnProps_type = {};

type props_type = MapStateProps_type & MapDispatchProps_type & OwnProps_type;

const ModalErrorContainer: React.FC<props_type> = ({ errors, ...props }) => {
  if (!errors.length) {
    return <></>;
  }

  const ErrorsElements = errors.map((errorText, idx) => (
    <ModalError key={idx} errorText={errorText} />
  ));

  return <div className={c.errors}>{ErrorsElements}</div>;
};

const mapStateToProps = (state: AppState_type): MapStateProps_type => ({
  errors: getGlobalErrors(state),
});

export default connect(mapStateToProps, {})(ModalErrorContainer);

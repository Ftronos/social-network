import ModalError from "./ModalError";
import { connect } from "react-redux";
import { getGlobalErrors } from "redux/selectors/app-selectors";
import c from "./ModalError.module.css";

const ModalErrorContainer = ({ errors, ...props }) => {
  if (!errors.length) {
    return <></>;
  }

  const ErrorsElements = errors.map((errorText, idx) => (
    <ModalError key={idx} errorText={errorText} />
  ));

  return <div className={c.errors}>{ErrorsElements}</div>;
};

const mapStateToProps = (state) => ({
  errors: getGlobalErrors(state),
});

export default connect(mapStateToProps, {})(ModalErrorContainer);

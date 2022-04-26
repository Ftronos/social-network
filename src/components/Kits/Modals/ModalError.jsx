import c from "./ModalError.module.css";

const modalError = ({ errorText, ...props }) => {
  return <div className={c.error}>{errorText}</div>;
};

export default modalError;

import c from "./ModalError.module.css";

type props_type = {
  errorText: string;
};

const modalError: React.FC<props_type> = ({ errorText, ...props }) => {
  return <div className={c.error}>{errorText}</div>;
};

export default modalError;

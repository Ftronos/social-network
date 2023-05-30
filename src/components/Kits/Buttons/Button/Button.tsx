import { props_type } from "../types";
import bc from "./../Button.common.module.css";

const Button: React.FC<props_type> = ({ click, disabled, buttonText }) => {
  return (
    <button onClick={click} className={bc.button} disabled={disabled}>
      {buttonText}
    </button>
  );
};

export default Button;

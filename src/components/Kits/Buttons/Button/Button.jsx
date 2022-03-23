import bc from "./../Button.common.module.css";
import c from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      onClick={props.click}
      className={bc.button}
      disabled={props.disabled}
    >
      {props.buttonText}
    </button>
  );
};

export default Button;

import bc from "./../Button.common.module.css";
import c from "./Button.module.css";
import loader from "assets/images/button-loader.gif";
import { props_type } from "../types";

const ButtonWithLoader: React.FC<props_type> = ({
  click,
  disabled,
  buttonText,
}) => {
  return (
    <button onClick={click} className={bc.button} disabled={disabled}>
      {disabled ? (
        <img src={loader} alt="Loading.." className={c.button__loader} />
      ) : (
        buttonText
      )}
    </button>
  );
};

export default ButtonWithLoader;

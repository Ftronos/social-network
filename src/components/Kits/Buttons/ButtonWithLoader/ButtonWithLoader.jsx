import bc from "./../Button.common.module.css";
import c from "./Button.module.css";
import loader from "assets/images/button-loader.gif";

const ButtonWithLoader = (props) => {
  return (
    <button
      onClick={props.click}
      className={bc.button}
      disabled={props.disabled}
    >
      {props.disabled ? (
        <img src={loader} alt="Loading.." className={c.button__loader} />
      ) : (
        props.buttonText
      )}
    </button>
  );
};

export default ButtonWithLoader;

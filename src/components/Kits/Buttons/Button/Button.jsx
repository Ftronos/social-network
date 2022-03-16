import c from "./Button.module.css";

const Button = (props) => {
  return (
    <button onClick={props.click} className={c.button}>
      {props.buttonText}
    </button>
  );
};

export default Button;

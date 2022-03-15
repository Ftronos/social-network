import c from "./Button.module.css";

const Button = (state) => {
  console.log(state);
  return (
    <button onClick={c.click} className={c.button}>
      {state.buttonText}
    </button>
  );
};

export default Button;

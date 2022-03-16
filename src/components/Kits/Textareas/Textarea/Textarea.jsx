import c from "./Textarea.module.css";

const Textarea = (props) => {
  return (
    <textarea
      onChange={props.change}
      className={c.textarea}
      placeholder={props.placeholder}
    >
      {props.value}
    </textarea>
  );
};

export default Textarea;

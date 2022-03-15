import c from "./Message.module.css";

const Message = (props) => {
  const className =
    c.dialogs__messages__item +
    " " +
    (props.position === "left"
      ? c.dialogs__messages__item_left
      : c.dialogs__messages__item_right);

  return <div className={className}>{props.text}</div>;
};

export default Message;

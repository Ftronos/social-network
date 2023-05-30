import c from "./Message.module.css";

type props_type = {
  position: "left" | "right";
  text: string;
};

const Message: React.FC<props_type> = ({ position, text }) => {
  const className =
    c.dialogs__messages__item +
    " " +
    (position === "left"
      ? c.dialogs__messages__item_left
      : c.dialogs__messages__item_right);

  return <div className={className}>{text}</div>;
};

export default Message;

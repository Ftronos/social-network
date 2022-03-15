import c from "./DialogItem.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  const path = "/dialogs/" + props.id;

  return (
    <NavLink to={path} className={c.dialogs__list__item}>
      {props.userName}
    </NavLink>
  );
};

export default DialogItem;

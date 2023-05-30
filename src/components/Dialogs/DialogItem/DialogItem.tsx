import c from "./DialogItem.module.css";
import { NavLink } from "react-router-dom";

type props_type = {
  id: number;
  userName: string;
};

const DialogItem: React.FC<props_type> = ({ id, userName }) => {
  const path = "/dialogs/" + id;

  return (
    <NavLink to={path} className={c.dialogs__list__item}>
      {userName}
    </NavLink>
  );
};

export default DialogItem;

import { NavLink } from "react-router-dom";
import c from "./Nav.module.css";

const Nav = (props) => {
  const navElements = props.state.nav.map((item) => (
    <div className={c.item} key={item.id}>
      <NavLink to={item.link}>{item.name}</NavLink>
    </div>
  ));

  return <nav className="nav">{navElements}</nav>;
};

export default Nav;

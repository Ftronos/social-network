import c from "./Header.module.css";
import k from "Kits.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={c.header + " " + k.container}>
      <img
        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/cc5ce984-b9cb-4e16-83de-eecd3683dbbf/d5op8n0-b0e3f25a-075a-4c90-9c7f-d9995ea9df25.gif"
        alt="Logo"
        className={c.logo}
      />
      <div>
        {props.isAuth ? props.login : <NavLink to="/login">Login</NavLink>}
      </div>
    </header>
  );
};

export default Header;

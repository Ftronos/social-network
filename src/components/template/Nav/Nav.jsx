import { NavLink } from 'react-router-dom';
import c from './Nav.module.css';

const Nav = () => {
  return (
    <nav className="nav">
      <div className={c.item}>
        <NavLink to="/profile" className={({ isActive }) => isActive ? c.activeClassLink : ""}>Profile</NavLink>
      </div>
      <div className={c.item}>
        <NavLink to="/dialogs" className={({ isActive }) => isActive ? c.activeClassLink : ""}>Messages</NavLink>
      </div>
    </nav>
  )
}

export default Nav;
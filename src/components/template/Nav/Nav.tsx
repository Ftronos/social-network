import React from "react";
import { NavLink } from "react-router-dom";
import c from "./Nav.module.css";
import { nav_type } from "types/types";

type props_type = {
  navItems: Array<nav_type>;
};

const Nav: React.FC<props_type> = ({ navItems }) => {
  const navElements = navItems.map((item: nav_type) => (
    <div className={c.item} key={item.id}>
      <NavLink to={item.link}>{item.name}</NavLink>
    </div>
  ));

  return <nav className="nav">{navElements}</nav>;
};

export default Nav;

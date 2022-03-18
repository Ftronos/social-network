import Nav from "components/template/Nav/Nav";

const NavContainer = (props) => {
  return <Nav navItems={props.store.getState().sidebar.nav} />;
};

export default NavContainer;

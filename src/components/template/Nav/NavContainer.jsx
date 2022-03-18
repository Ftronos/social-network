import Nav from "components/template/Nav/Nav";
import StoreContext from "storeContext";

const NavContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => <Nav navItems={store.getState().sidebar.nav} />}
    </StoreContext.Consumer>
  );
};

export default NavContainer;

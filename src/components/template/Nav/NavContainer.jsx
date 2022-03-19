import Nav from "components/template/Nav/Nav";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    navItems: state.sidebar.nav,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};

const NavContainer = connect(mapStateToProps, mapDispatchToProps)(Nav);

export default NavContainer;

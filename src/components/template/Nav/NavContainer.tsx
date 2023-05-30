import Nav from "components/template/Nav/Nav";
import { connect } from "react-redux";
import { AppState_type } from "redux/redux-store";
import { nav_type } from "types/types";

type MapStateProps_type = {
  navItems: Array<nav_type>;
};

const mapStateToProps = (state: AppState_type): MapStateProps_type => ({
  navItems: state.sidebar.nav,
});

const NavContainer = connect(mapStateToProps)(Nav);

export default NavContainer;

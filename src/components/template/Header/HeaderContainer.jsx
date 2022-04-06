import Header from "components/template/Header/Header";
import React from "react";
import { connect } from "react-redux";
import { logoutUser_tc } from "redux/auth_reducer";

class HeaderContainer extends React.Component {
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(mapStateToProps, {
  logout: logoutUser_tc,
})(HeaderContainer);

import Header from "components/template/Header/Header";
import React from "react";
import { connect } from "react-redux";
import { getAuthUserData_tc } from "redux/auth_reducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getAuthUserData_tc();
  }

  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(mapStateToProps, { getAuthUserData_tc })(
  HeaderContainer
);

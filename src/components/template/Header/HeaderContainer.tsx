import Header from "components/template/Header/Header";
import React from "react";
import { connect } from "react-redux";
import { logoutUser_tc } from "redux/auth_reducer";
import { AppState_type } from "redux/redux-store";

type MapStateProps_type = {
  isAuth: boolean;
  login: string | null;
};
type MapDispatchProps_type = {
  logout: () => void;
};
type OwnStateProps_type = {};
type props_type = MapStateProps_type &
  MapDispatchProps_type &
  OwnStateProps_type;

class HeaderContainer extends React.Component<props_type> {
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state: AppState_type): MapStateProps_type => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect<
  MapStateProps_type,
  MapDispatchProps_type,
  OwnStateProps_type,
  AppState_type
>(mapStateToProps, {
  logout: logoutUser_tc,
})(HeaderContainer);

import { Navigate } from "react-router-dom";
import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

const WithAuthRedirect = (Component) => {
  class RedirectComponent extends React.Component {
    render() {
      if (this.props.isAuth === false) {
        return <Navigate to="/login" />;
      }

      return <Component {...this.props} />;
    }
  }

  return connect(mapStateToProps)(RedirectComponent);
};

export default WithAuthRedirect;

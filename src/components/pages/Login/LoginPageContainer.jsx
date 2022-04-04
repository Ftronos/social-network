import LoginPage from "./LoginPage";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

const LoginContainer = (props) => {
  if (!props.isAuth) {
    return <LoginPage />;
  }

  return <Navigate to="/profile" />;
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps)(LoginContainer);

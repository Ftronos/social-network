import LoginPage from "./LoginPage";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { AppState_type } from "redux/redux-store";

type MapStateProps_type = {
  isAuth: boolean;
};

type props_type = MapStateProps_type;

const LoginContainer: React.FC<props_type> = ({ isAuth }) => {
  if (!isAuth) {
    return <LoginPage />;
  }

  return <Navigate to="/profile" />;
};

const mapStateToProps = (state: AppState_type): MapStateProps_type => ({
  isAuth: state.auth.isAuth,
});

export default connect<MapStateProps_type, {}, {}, AppState_type>(
  mapStateToProps
)(LoginContainer);

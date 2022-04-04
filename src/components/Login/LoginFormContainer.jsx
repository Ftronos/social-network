import LoginForm from "./LoginForm";
import { authAPI } from "api/api";
import { connect } from "react-redux";
import { authUser_tc } from "redux/auth_reducer";

const LoginFormContainer = (props) => {
  const onSubmit = (formData) => {
    let { email, password, rememberMe } = formData;

    props.authUser(email, password, rememberMe);
  };

  return (
    <div>
      <LoginForm {...props} onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { authUser: authUser_tc })(
  LoginFormContainer
);

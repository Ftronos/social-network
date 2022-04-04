import LoginForm from "./LoginForm";
import { connect } from "react-redux";
import { loginUser_tc } from "redux/auth_reducer";

const LoginFormContainer = (props) => {
  const onSubmit = (formData) => {
    let { email, password, rememberMe, captcha } = formData;

    props.loginUser(email, password, rememberMe, captcha);
  };

  return (
    <div>
      <LoginForm {...props} onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  captchaUrl: state.auth.captchaUrl,
});

export default connect(mapStateToProps, { loginUser: loginUser_tc })(
  LoginFormContainer
);

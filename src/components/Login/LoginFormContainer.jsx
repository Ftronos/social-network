import LoginForm from "./LoginForm";
import { reduxForm } from "redux-form";
import { authAPI } from "api/api";

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const LoginFormContainer = (props) => {
  const onSubmit = (formData) => {
    let { email, password, rememberMe } = formData;
    authAPI.login(email, password, rememberMe).then((data) => {
      if (data.resultCode !== 0) {
        data.messages.forEach((msg) => alert(msg));
      } else {
        window.location.reload();
      }
    });
  };

  return (
    <div>
      <LoginReduxForm {...props} onSubmit={onSubmit} />
    </div>
  );
};

export default LoginFormContainer;

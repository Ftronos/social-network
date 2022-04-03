import LoginForm from "./LoginForm";
import { authAPI } from "api/api";

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
      <LoginForm {...props} onSubmit={onSubmit} />
    </div>
  );
};

export default LoginFormContainer;

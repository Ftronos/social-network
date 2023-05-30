import LoginForm from "./LoginForm";
import { connect } from "react-redux";
import { loginUser_tc } from "redux/auth_reducer";
import { AppState_type } from "redux/redux-store";

type MapStateProps_type = {
  captchaUrl: string | null;
};
type MapDispatchProps_type = {
  loginUser: (
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: string
  ) => void;
};
type OwnProps_type = {};

type props_type = MapStateProps_type & MapDispatchProps_type & OwnProps_type;

export type LoginFormValues_type = {
  email: string;
  password: string;
  rememberMe: boolean;
  captcha: string;
};

const LoginFormContainer: React.FC<props_type> = ({
  captchaUrl,
  loginUser,
  ...props
}) => {
  const onSubmit = (formData: LoginFormValues_type) => {
    let { email, password, rememberMe, captcha } = formData;

    loginUser(email, password, rememberMe, captcha);
  };

  return (
    <div>
      <LoginForm captchaUrl={captchaUrl} onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = (state: AppState_type): MapStateProps_type => ({
  captchaUrl: state.auth.captchaUrl,
});

export default connect<
  MapStateProps_type,
  MapDispatchProps_type,
  OwnProps_type,
  AppState_type
>(mapStateToProps, { loginUser: loginUser_tc })(LoginFormContainer);

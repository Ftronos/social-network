import Button from "components/Kits/Buttons/Button/Button";
import { Input } from "components/Kits/FormsControls/FormsControls";
import { Field, reduxForm } from "redux-form";
import { requiredField } from "utils/validators/validators";
import c from "components/Kits/FormsControls/FormControls.module.css";

let LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder="Логин"
          name="email"
          component={Input}
          validate={[requiredField]}
        />
      </div>
      <div>
        <Field
          placeholder="Пароль"
          name="password"
          component={Input}
          validate={[requiredField]}
        />
      </div>
      <div>
        <Field component={"input"} name="rememberMe" type="checkbox" />{" "}
        Запомнить меня
      </div>
      {props.captchaUrl && (
        <div>
          <img src={props.captchaUrl} alt="" />
          <Field
            placeholder="Введите капчу"
            name="captcha"
            component={Input}
            validate={[requiredField]}
          />
        </div>
      )}
      {props.error && <div className={c.form_summary_error}>{props.error}</div>}
      <div>
        <Button buttonText="Войти" />
      </div>
    </form>
  );
};

LoginForm = reduxForm({ form: "loginForm" })(LoginForm);

export default LoginForm;

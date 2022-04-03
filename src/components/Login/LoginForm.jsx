import Button from "components/Kits/Buttons/Button/Button";
import { Input } from "components/Kits/FormsControls/FormsControls";
import { Field, reduxForm } from "redux-form";
import { requiredField } from "utils/validators/validators";

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
      <div>
        <Button buttonText="Войти" />
      </div>
    </form>
  );
};

LoginForm = reduxForm({ form: "loginForm" })(LoginForm);

export default LoginForm;

import Button from "components/Kits/Buttons/Button/Button";
import { Input } from "components/Kits/FormsControls/FormsControls";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { requiredField } from "utils/validators/validators";
import c from "components/Kits/FormsControls/FormControls.module.css";
import { LoginFormValues_type } from "./LoginFormContainer";
import { createField } from "./../Kits/FormsControls/FormsControls";

type props_type = {
  captchaUrl: string | null;
};

type LoginFormValuesKeys_type = keyof LoginFormValues_type;

let LoginForm: React.FC<
  InjectedFormProps<LoginFormValues_type, props_type> & props_type
> = ({ handleSubmit, captchaUrl, error, ...props }) => {
  return (
    <form onSubmit={handleSubmit}>
      {createField<LoginFormValuesKeys_type>(
        "Логин",
        "email",
        [requiredField],
        Input
      )}
      {createField<LoginFormValuesKeys_type>(
        "Пароль",
        "password",
        [requiredField],
        Input,
        { type: "password" }
      )}
      {createField<LoginFormValuesKeys_type>(
        undefined,
        "rememberMe",
        [],
        Input,
        { type: "checkbox" },
        "Запомнить меня"
      )}
      {captchaUrl && (
        <div>
          <img src={captchaUrl} alt="" />
          {createField<LoginFormValuesKeys_type>(
            "Введите капчу",
            "captcha",
            [requiredField],
            Input
          )}
        </div>
      )}
      {error && <div className={c.form_summary_error}>{error}</div>}
      <div>
        <Button buttonText="Войти" />
      </div>
    </form>
  );
};

export default reduxForm<LoginFormValues_type, props_type>({
  form: "loginForm",
})(LoginForm);

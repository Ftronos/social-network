import { Field, reduxForm } from "redux-form";
import { Input, Textarea } from "components/Kits/FormsControls/FormsControls";
import Button from "components/Kits/Buttons/Button/Button";
import c from "components/Kits/FormsControls/FormControls.module.css";

const ProfileDataForm = ({ handleSubmit, profile, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        Имя: <br />
        <Field name="fullName" component={Input} />
      </div>
      <div>
        Обо мне: <br />
        <Field name="aboutMe" component={Input} />
      </div>
      <div>
        В поисках работы: <br />
        <Field name="lookingForAJob" type="checkbox" component={Input} />
      </div>
      <div>
        Описание работы: <br />
        <Field name="lookingForAJobDescription" component={Textarea} />
      </div>
      <p>Контакты:</p>
      {Object.entries(profile.contacts).map((item, idx) => {
        return (
          <div key={idx}>
            {item[0]}:{" "}
            <Field name={"contacts." + item[0]} type="text" component={Input} />
          </div>
        );
      })}
      {error && <div className={c.form_summary_error}>{error}</div>}
      <Button buttonText="Сохранить" />
    </form>
  );
};

export default reduxForm({ form: "editProfileForm" })(ProfileDataForm);

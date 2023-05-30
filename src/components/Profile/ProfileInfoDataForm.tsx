import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { Input, Textarea } from "components/Kits/FormsControls/FormsControls";
import Button from "components/Kits/Buttons/Button/Button";
import c from "components/Kits/FormsControls/FormControls.module.css";
import { profile_type } from "types/types";
import { createField } from "./../Kits/FormsControls/FormsControls";

type props_type = {
  profile: profile_type;
};

type ProfileInfoDataFormValuesKeys_type = keyof profile_type;

const ProfileDataForm: React.FC<
  InjectedFormProps<profile_type, props_type> & props_type
> = ({ handleSubmit, profile, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      <p>Имя:</p>
      {createField<ProfileInfoDataFormValuesKeys_type>(
        undefined,
        "fullName",
        [],
        Input
      )}
      <p>Обо мне:</p>
      {createField<ProfileInfoDataFormValuesKeys_type>(
        undefined,
        "aboutMe",
        [],
        Input
      )}
      <p>В поисках работы:</p>
      {createField<ProfileInfoDataFormValuesKeys_type>(
        undefined,
        "lookingForAJob",
        [],
        Input,
        {
          type: "checkbox",
        }
      )}
      <p>Описание работы:</p>
      {createField<ProfileInfoDataFormValuesKeys_type>(
        undefined,
        "lookingForAJobDescription",
        [],
        Textarea
      )}
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

export default reduxForm<profile_type, props_type>({ form: "editProfileForm" })(
  ProfileDataForm
);

import Button from "components/Kits/Buttons/Button/Button";
import { Textarea } from "components/Kits/FormsControls/FormsControls";
import k from "Kits.module.css";
import { InjectedFormProps, reduxForm } from "redux-form";
import { maxLengthCreator } from "utils/validators/validators";
import { createField } from "./../../Kits/FormsControls/FormsControls";
import { DialogsFormValues_type } from "./Dialogs";

const maxLength50 = maxLengthCreator(50);

type messageFormProps_type = {};

type DialogsFormValuesKeys_type = keyof DialogsFormValues_type;

let AddDialogMessageForm: React.FC<
  InjectedFormProps<DialogsFormValues_type, messageFormProps_type> &
    messageFormProps_type
> = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      {createField<DialogsFormValuesKeys_type>(
        "Текст сообщения",
        "message",
        [maxLength50],
        Textarea,
        {
          className: k.input,
          cols: "30",
          rows: "10",
        }
      )}
      <Button buttonText="Добавить" />
    </form>
  );
};

export default reduxForm<DialogsFormValues_type, messageFormProps_type>({
  form: "addMessageForm",
})(AddDialogMessageForm);

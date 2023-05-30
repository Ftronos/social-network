import Button from "components/Kits/Buttons/Button/Button";
import {
  createField,
  Textarea,
} from "components/Kits/FormsControls/FormsControls";
import k from "Kits.module.css";
import { InjectedFormProps, reduxForm } from "redux-form";
import { maxLengthCreator, requiredField } from "utils/validators/validators";
import { UserPostsFormValues_type } from "./UserPosts";

const maxLengthCreator30 = maxLengthCreator(30);

type props_type = {
  postText: string | null;
};

type UserPostsFormValuesKeys_type = keyof UserPostsFormValues_type;

let AddPostForm: React.FC<
  InjectedFormProps<UserPostsFormValues_type, props_type> & props_type
> = ({ handleSubmit, postText }) => {
  return (
    <form onSubmit={handleSubmit}>
      {createField<UserPostsFormValuesKeys_type>(
        "Post message",
        "postText",
        [requiredField, maxLengthCreator30],
        Textarea,
        {
          cols: "30",
          rows: "10",
          className: k.input,
          defaultValue: postText,
        }
      )}
      <Button buttonText="Добавить" />
    </form>
  );
};

export default reduxForm<UserPostsFormValues_type, props_type>({
  form: "addPostForm",
})(AddPostForm);

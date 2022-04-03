import Post from "components/Posts/Post/Post";
import c from "./UserPosts.module.css";
import k from "Kits.module.css";
import React from "react";
import Button from "components/Kits/Buttons/Button/Button";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, requiredField } from "utils/validators/validators";
import { Textarea } from "components/Kits/FormsControls/FormsControls";

const maxLengthCreator30 = maxLengthCreator(30);

let AddPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component={Textarea}
        cols="30"
        rows="10"
        name="postText"
        className={k.input}
        defaultValue={props.postText}
        placeholder="Post message"
        validate={[requiredField, maxLengthCreator30]}
      />
      <Button buttonText="Добавить" />
    </form>
  );
};

AddPostForm = reduxForm({
  form: "addPostForm",
})(AddPostForm);

const Posts = (props) => {
  const postsElements = props.profilePage.myPosts.map((item) => (
    <Post msg={item.text} key={item.id} />
  ));

  const addPost = (formData) => {
    props.addPost(formData.postText);
  };

  return (
    <div>
      <AddPostForm
        onSubmit={addPost}
        postText={props.profilePage.newPostText}
      />
      <div className={c.posts}>{postsElements}</div>
    </div>
  );
};

export default Posts;

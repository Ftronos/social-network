import c from "./Dialogs.module.css";
import k from "Kits.module.css";
import Message from "components/Dialogs/MessageItem/Message";
import DialogItem from "components/Dialogs/DialogItem/DialogItem";
import React from "react";
import Button from "components/Kits/Buttons/Button/Button";
import { Field, reduxForm } from "redux-form";
import { requiredField, maxLengthCreator } from "utils/validators/validators";
import { Textarea } from "components/Kits/FormsControls/FormsControls";

const maxLength50 = maxLengthCreator(50);

let AddDialogMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component={Textarea}
        name="message"
        className={k.input}
        validate={[requiredField, maxLength50]}
        cols="30"
        rows="10"
      />
      <Button buttonText="Добавить" />
    </form>
  );
};

AddDialogMessageForm = reduxForm({ form: "addMessageForm" })(
  AddDialogMessageForm
);

const Dialogs = (props) => {
  const dialogsElements = props.dialogsPage.dialogs.map((item) => (
    <DialogItem id={item.id} userName={item.name} key={item.id} />
  ));
  const messagesElements = props.dialogsPage.messages.map((item) => (
    <Message text={item.text} position={item.position} key={item.id} />
  ));

  const addMessage = (formData) => {
    props.addMessage(formData.message);
  };

  return (
    <div className={c.dialogs}>
      <div className={c.dialogs__messages + " " + k.container}>
        {messagesElements}
        <AddDialogMessageForm onSubmit={addMessage} />
      </div>
      <div className={c.dialogs__list + " " + k.container}>
        {dialogsElements}
      </div>
    </div>
  );
};

export default Dialogs;

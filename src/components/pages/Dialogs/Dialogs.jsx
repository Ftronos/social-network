import c from "./Dialogs.module.css";
import k from "Kits.module.css";
import Message from "components/Dialogs/MessageItem/Message";
import DialogItem from "components/Dialogs/DialogItem/DialogItem";
import React from "react";
import Button from "components/Kits/Buttons/Button/Button";
import { Navigate } from "react-router-dom";

const Dialogs = (props) => {
  const dialogsElements = props.dialogsPage.dialogs.map((item) => (
    <DialogItem id={item.id} userName={item.name} key={item.id} />
  ));
  const messagesElements = props.dialogsPage.messages.map((item) => (
    <Message text={item.text} position={item.position} key={item.id} />
  ));

  const textarea = React.createRef();

  const onAddMessage = () => {
    props.addMessage();
  };

  const onMessageChange = () => {
    let text = textarea.current.value;

    props.onMessageChange(text);
  };

  if (!props.isAuth) {
    return <Navigate to="/login" />;
  }

  return (
    <div className={c.dialogs}>
      <div className={c.dialogs__messages + " " + k.container}>
        {messagesElements}
        <textarea
          ref={textarea}
          name=""
          id=""
          cols="30"
          rows="10"
          className={k.input}
          onChange={onMessageChange}
          value={props.dialogsPage.newMessageText}
        />
        <Button click={onAddMessage} buttonText="Добавить" />
      </div>
      <div className={c.dialogs__list + " " + k.container}>
        {dialogsElements}
      </div>
    </div>
  );
};

export default Dialogs;

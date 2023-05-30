import c from "./Dialogs.module.css";
import k from "Kits.module.css";
import Message from "components/Dialogs/MessageItem/Message";
import DialogItem from "components/Dialogs/DialogItem/DialogItem";
import AddDialogMessageForm from "./DialogsForm";
import React from "react";

import cn from "classnames";
import { dialog_type, message_type } from "types/types";

type props_type = {
  dialogs: Array<dialog_type>;
  messages: Array<message_type>;
  addMessage: (text: string) => void;
};

export type DialogsFormValues_type = {
  message: string;
};

const Dialogs: React.FC<props_type> = ({
  dialogs,
  messages,
  addMessage,
  ...props
}) => {
  const dialogsElements = dialogs.map((item: dialog_type) => (
    <DialogItem id={item.id} userName={item.name} key={item.id} />
  ));
  const messagesElements = messages.map((item: message_type) => (
    <Message text={item.text} position={item.position} key={item.id} />
  ));

  const onAddMessage = (formData: DialogsFormValues_type) => {
    addMessage(formData.message);
  };

  return (
    <div className={c.dialogs}>
      <div className={cn(c.dialogs__messages, k.container)}>
        {messagesElements}
        <AddDialogMessageForm onSubmit={onAddMessage} />
      </div>
      <div className={cn(c.dialogs__list, k.container)}>{dialogsElements}</div>
    </div>
  );
};

export default Dialogs;

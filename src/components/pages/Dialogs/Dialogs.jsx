import c from "./Dialogs.module.css";
import k from "Kits.module.css";
import Message from "components/Dialogs/MessageItem/Message";
import DialogItem from "components/Dialogs/DialogItem/DialogItem";

const Dialogs = (props) => {
  const dialogsElements = props.state.dialogs.map((item) => (
    <DialogItem id={item.id} userName={item.name} key={item.id} />
  ));
  const messagesElements = props.state.messages.map((item) => (
    <Message text={item.text} position={item.position} key={item.id} />
  ));

  return (
    <div className={c.dialogs}>
      <div className={c.dialogs__messages + " " + k.container}>
        {messagesElements}
      </div>
      <div className={c.dialogs__list + " " + k.container}>
        {dialogsElements}
      </div>
    </div>
  );
};

export default Dialogs;

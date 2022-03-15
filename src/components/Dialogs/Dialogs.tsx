import React from "react";
import { DialogObj, MessagesObj } from "../../redux/state";
import DialogItem from "./DialogItem/DialogItem";
import classes from "./Dialogs.module.css";
import CreateMessage from "./MessageItem/CreateMessage/CreateMessage";
import MessageItem from "./MessageItem/MesssageItem";

type DialogPropsType = {
  dialogs: Array<DialogObj>;
  messages: Array<MessagesObj>;
  addMessage: any;
};

const Dialogs: React.FC<DialogPropsType> = (props) => {
  let dialogsElement = props.dialogs.map((el) => (
    <DialogItem key={el._id} userName={el.name} id={el._id} />
  ));

  return (
    <main className={classes.dialogs}>
      <div className={classes.dialogsList}>{dialogsElement}</div>
      <div className={classes.messagesList}>
        <div className={classes.item}>
          {props.messages.map((el) => (
            <MessageItem key={el._id} messageText={el.message} id={el._id} />
          ))}
        </div>
        <CreateMessage addMessage={props.addMessage} />
      </div>
    </main>
  );
};

export default Dialogs;

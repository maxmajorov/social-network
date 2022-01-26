import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import classes from "./Dialogs.module.css";
import CreateMessage from "./MessageItem/CreateMessage/CreateMessage";
import MessageItem from "./MessageItem/MesssageItem";

type dialogObj = {
  id: string;
  name: string;
};

type messagesObj = {
  id: string;
  message: string;
};

type dialogPropsType = {
  dialogs: Array<dialogObj>;
  messages: Array<messagesObj>;
};

function Dialogs(props: dialogPropsType) {
  let dialogsElement = props.dialogs.map((el) => (
    <DialogItem userName={el.name} id={el.id} />
  ));

  // let messagesElement =

  return (
    <main className={classes.dialogs}>
      <div className={classes.dialogsList}>{dialogsElement}</div>
      <div className={classes.messagesList}>
        <div className={classes.item}>
          {props.messages.map((el) => (
            <MessageItem messageText={el.message} id={el.id} />
          ))}
        </div>
        <CreateMessage />
      </div>
    </main>
  );
}

export default Dialogs;

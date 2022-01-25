import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import classes from "./Dialogs.module.css";
import MessageItem from "./MessageItem/MesssageItem";

function Dialogs() {
  type dialogsType = {
    id: string;
    name: string;
  };

  let dialogs: Array<dialogsType> = [
    { id: "1", name: "Maxim" },
    { id: "2", name: "Olga" },
    { id: "3", name: "Pavel" },
    { id: "4", name: "Karina" },
    { id: "5", name: "Oleg" },
  ];

  type messagesType = {
    id: string;
    message: string;
  };

  let messages: Array<messagesType> = [
    { id: "1", message: "Hello" },
    { id: "2", message: "How are you?" },
    { id: "3", message: "I'm fine! And you?" },
    { id: "4", message: "Thanks! I'm OK!!!" },
  ];

  let dialogsElement = dialogs.map((el) => (
    <DialogItem userName={el.name} id={el.id} />
  ));

  let messagesElement = messages.map((el) => (
    <MessageItem messageText={el.message} id={el.id} />
  ));

  return (
    <main className={classes.dialogs}>
      <div className={classes.dialogsList}>{dialogsElement}</div>
      <div className={classes.messagesList}>{messagesElement}</div>
    </main>
  );
}

export default Dialogs;

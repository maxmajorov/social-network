import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import classes from "./Dialogs.module.css";
import MessageItem from "./MessageItem/MesssageItem";

function Dialogs() {
  return (
    <main className={classes.dialogs}>
      <div className={classes.dialogsList}>
        <DialogItem userName="Maxim" id="1" />
        <DialogItem userName="Olga" id="2" />
        <DialogItem userName="Pavel" id="3" />
        <DialogItem userName="Karina" id="4" />
        <DialogItem userName="Oleg" id="5" />
      </div>
      <div className={classes.messagesList}>
        <MessageItem messageText="Hello!" />
        <MessageItem messageText="How are you?" />
        <MessageItem messageText="I'm fine! And you?" />
      </div>
    </main>
  );
}

export default Dialogs;

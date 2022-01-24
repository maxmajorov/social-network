import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import classes from "./Dialogs.module.css";
import MessageItem from "./MessageItem/MesssageItem";

function Dialogs() {
  type dialogDataType = {
    id: string;
    name: string;
  };

  let dialogData: Array<dialogDataType> = [
    { id: "1", name: "Maxim" },
    { id: "2", name: "Olga" },
    { id: "3", name: "Pavel" },
    { id: "4", name: "Karina" },
    { id: "5", name: "Oleg" },
  ];

  type messageDataType = {
    id: string;
    message: string;
  };

  let messageData: Array<messageDataType> = [
    { id: "1", message: "Hello" },
    { id: "2", message: "How are you?" },
    { id: "3", message: "I'm fine! And you?" },
    { id: "4", message: "Thanks! I'm OK!!!" },
  ];

  return (
    <main className={classes.dialogs}>
      <div className={classes.dialogsList}>
        {dialogData.map((el) => (
          <DialogItem userName={el.name} id={el.id} />
        ))}
      </div>
      <div className={classes.messagesList}>
        {messageData.map((el) => (
          <MessageItem messageText={el.message} id={el.id} />
        ))}
      </div>
    </main>
  );
}

export default Dialogs;

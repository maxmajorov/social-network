import React, { useEffect } from "react";
import { useAppSelector } from "../../bll/store";
import { DialogItem } from "./DialogItem/DialogItem";
import { CreateMessageForm } from "./MessageItem/CreateMessage/CreateMessage";
import { MessageItem } from "./MessageItem/MesssageItem";
import classes from "./Dialogs.module.css";
import {
  selectDialogs,
  selectMessages,
} from "../../bll/reducers/dialogs-reducer";

type DialogsPropsType = {
  addNewMessageToStore: (newMessage: string) => void;
};

const Dialogs: React.FC<DialogsPropsType> = ({ addNewMessageToStore }) => {
  const dialogs = useAppSelector(selectDialogs);
  const messages = useAppSelector(selectMessages);

  useEffect(() => {
    document.title = `Dialogs`;
    return () => {
      // cleanup
      document.title = `Social Network`;
    };
  });

  const dialogsElements = dialogs.map((el) => (
    <DialogItem key={el._id} userName={el.name} id={el._id} />
  ));

  const messageElements = messages.map((el) => (
    <MessageItem key={el._id} messageText={el.message} id={el._id} />
  ));

  return (
    <main className={classes.dialogs}>
      <div className={classes.dialogsList}>{dialogsElements}</div>
      <div className={classes.messagesList}>
        <div className={classes.item}>{messageElements}</div>
        <CreateMessageForm />
      </div>
    </main>
  );
};

export default Dialogs;

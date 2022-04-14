import React from "react";
import { store } from "../../redux/redux-store";
import { DialogsPageType } from "../../redux/store";
import DialogItem from "./DialogItem/DialogItem";
import classes from "./Dialogs.module.css";
import { CreateMessage } from "./MessageItem/CreateMessage/CreateMessage";
import MessageItem from "./MessageItem/MesssageItem";

type DialogPropsType = {
  dialogsState: DialogsPageType;
  addNewMessageToStore: (newMessage: string) => void;
};

const Dialogs: React.FC<DialogPropsType> = ({
  dialogsState,
  addNewMessageToStore,
}) => {
  const dialogsElements = dialogsState.dialogs.map((el) => (
    <DialogItem key={el._id} userName={el.name} id={el._id} />
  ));

  const messageElements = dialogsState.messages.map((el) => (
    <MessageItem key={el._id} messageText={el.message} id={el._id} />
  ));

  return (
    <main className={classes.dialogs}>
      <div className={classes.dialogsList}>{dialogsElements}</div>
      <div className={classes.messagesList}>
        <div className={classes.item}>{messageElements}</div>
        <CreateMessage addNewMessageToStore={addNewMessageToStore} />
      </div>
    </main>
  );
};

export default Dialogs;

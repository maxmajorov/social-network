import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import { DialogsPageType } from "../../store/reducers/dialogs-reducer";
import { AppStateType } from "../../store/redux-store";
import DialogItem from "./DialogItem/DialogItem";
import classes from "./Dialogs.module.css";
import { CreateMessage } from "./MessageItem/CreateMessage/CreateMessage";
import MessageItem from "./MessageItem/MesssageItem";

type DialogsPropsType = {
  dialogsState: DialogsPageType;
  addNewMessageToStore: (newMessage: string) => void;
};

// type берем из типизированных mapStateToProps & mapDispatchToProps

const Dialogs: React.FC<DialogsPropsType> = ({
  dialogsState,
  addNewMessageToStore,
}) => {
  const authState = useSelector((state: AppStateType) => state.authReducer);

  useEffect(() => {
    // Потом переисать для всех страниц
    document.title = `Dialogs`;
    return () => {
      // cleanup
      document.title = `Social Network`;
    };
  });

  const dialogsElements = dialogsState.dialogs.map((el) => (
    <DialogItem key={el._id} userName={el.name} id={el._id} />
  ));

  const messageElements = dialogsState.messages.map((el) => (
    <MessageItem key={el._id} messageText={el.message} id={el._id} />
  ));

  if (!authState.isAuth) {
    console.log(authState.isAuth);
    return <Navigate replace to="/authentication" />;
  }

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

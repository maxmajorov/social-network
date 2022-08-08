import React, { useEffect } from "react";
import { DialogItem } from "./DialogItem/DialogItem";
import { CreateMessageForm } from "./MessageItem/CreateMessage/CreateMessage";
import { MessageItem } from "./MessageItem/MesssageItem";
import { useNavigate } from "react-router";
import { isLoggedInSelector } from "../../bll/reducers/auth-reducer";
import {
  AddNewMessageAC,
  selectDialogs,
  selectMessages,
} from "../../bll/reducers/dialogs-reducer";
import { useAppDispatch, useAppSelector } from "../../bll/store";
import classes from "./DialogsContainer.module.css";

const DialogsContainer = () => {
  const isLoggedIn = useAppSelector(isLoggedInSelector);
  const dialogs = useAppSelector(selectDialogs);
  const messages = useAppSelector(selectMessages);
  const dispatch = useAppDispatch();
  let navigate = useNavigate();

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

  useEffect(() => {
    if (!isLoggedIn) {
      return navigate("/authentication");
    }
  }, [navigate, isLoggedIn]);

  // const addNewMessageToStoreCallback = (newMessage: string) => {
  //   dispatch(AddNewMessageAC(newMessage));
  // };

  return (
    <main className={classes.dialogs}>
      <div className={classes.dialogsList}>{dialogsElements}</div>
      <div>
        <div className={classes.item}>{messageElements}</div>
        <CreateMessageForm />
      </div>
    </main>
  );
};

export default DialogsContainer;

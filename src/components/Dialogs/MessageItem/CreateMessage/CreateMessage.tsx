import React, { ChangeEvent, KeyboardEvent, useState } from "react";

import classes from "./CreateMessage.module.css";

type createMessagePropsType = {
  addNewMessageToStore: (newMessage: string) => void;
};

export const CreateMessage: React.FC<createMessagePropsType> = ({
  addNewMessageToStore,
}) => {
  const [newMessage, setNewMessage] = useState<string>("");
  const [error, setError] = useState("");

  const onChangeAddNewMessageHandler = (
    event: ChangeEvent<HTMLTextAreaElement>
  ) => {
    setNewMessage(event.currentTarget.value.trim());
  };

  let onClickAddNewMessageHandler = () => {
    newMessage.length
      ? addNewMessageToStore(newMessage)
      : setError("Invalid input");
    setNewMessage("");
  };

  const onKeyPressInputHandler = (
    event: KeyboardEvent<HTMLTextAreaElement>
  ) => {
    event.charCode === 13
      ? onClickAddNewMessageHandler()
      : console.log("notEnter");
  };

  return (
    <div className={classes.createMessage}>
      <textarea
        value={newMessage}
        className={classes.inputMessage}
        placeholder="Write something here..."
        onChange={onChangeAddNewMessageHandler}
        onKeyPress={onKeyPressInputHandler}
        cols={50}
        rows={2}
      ></textarea>
      <div className={classes.errorMessage}>{error}</div>
      <button className={classes.postBtn} onClick={onClickAddNewMessageHandler}>
        Send message
      </button>
    </div>
  );
};

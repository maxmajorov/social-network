import React, { ChangeEvent, useState } from "react";

import classes from "./CreateMessage.module.css";

type createMessagePropsType = {
  addNewMessageToStore: (newMessage: string) => void;
};

export const CreateMessage: React.FC<createMessagePropsType> = ({
  addNewMessageToStore,
}) => {
  const [newMessage, setNewMessage] = useState<string>("");

  const onChangeAddNewMessageHandler = (
    event: ChangeEvent<HTMLTextAreaElement>
  ) => {
    setNewMessage(event.currentTarget.value);
  };

  let onClickAddNewMessageHandler = () => {
    addNewMessageToStore(newMessage); // отправка нового сообщений или через dispatch or addMessage
  };

  return (
    <div className={classes.createMessage}>
      <textarea
        className={classes.inputMessage}
        placeholder="Write something here..."
        onChange={onChangeAddNewMessageHandler}
        cols={50}
        rows={2}
      ></textarea>
      <button className={classes.postBtn} onClick={onClickAddNewMessageHandler}>
        Send message
      </button>
    </div>
  );
};

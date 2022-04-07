import React, { ChangeEvent, useState } from "react";
import { addMessageActionCreator } from "../../../../redux/state";
import classes from "./CreateMessage.module.css";

type createMessagePropsType = {
  addMessage: (newMessage: string) => void;
  dispatch: any;
};

export const CreateMessage: React.FC<createMessagePropsType> = ({
  addMessage,
  dispatch,
}) => {
  const [newMessage, setNewMessage] = useState<string>("");

  const onChangeAddNewMessageHandler = (
    event: ChangeEvent<HTMLTextAreaElement>
  ) => {
    setNewMessage(event.currentTarget.value);
  };

  let onClickAddNewMessageHandler = () => {
    // addMessage(newMessage);
    dispatch(addMessageActionCreator(newMessage)); // отправка нового сообщений или через dispatch or addMessage
  };

  // const action = addMessageActionCreator(newMessage);

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

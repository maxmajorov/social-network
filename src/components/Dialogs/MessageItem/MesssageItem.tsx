import React from "react";
import classes from "./MessageItem.module.css";

type MessageItemPropsType = {
  id: string;
  messageText: string;
};

export const MessageItem: React.FC<MessageItemPropsType> = ({
  messageText,
  id,
}) => {
  return <div className={classes.message}>{messageText}</div>;
};

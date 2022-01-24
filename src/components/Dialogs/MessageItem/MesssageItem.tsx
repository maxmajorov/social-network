import React from "react";
import classes from "./MessageItem.module.css";

type MessageItemPropsType = {
  id: string;
  messageText: string;
};

function MessageItem(props: MessageItemPropsType) {
  return <div className={classes.message}>{props.messageText}</div>;
}

export default MessageItem;

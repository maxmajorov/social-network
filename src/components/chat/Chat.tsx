import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import defaultAva from "../../assets/img/def-image.png";
import { userIDSelector } from "../../bll/reducers/auth-reducer";
import { useAppDispatch, useAppSelector } from "../../bll/store";
import classes from "./Chat.module.css";

type ChatMessageType = {
  userId: number;
  userName: string;
  message: string;
  photo: string;
};

// craete connection then component mount

export const Chat = () => {
  const [newMessage, setNewMessage] = useState<string>("");
  const [messages, setNessages] = useState<ChatMessageType[]>([]);

  const userID = useAppSelector(userIDSelector);
  const dispatch = useAppDispatch();

  // socket
  const socket = new WebSocket(
    "wss://social-network.samuraijs.com/handlers/chatHandler.ashx"
  );

  useEffect(() => {
    socket.addEventListener("message", (event: MessageEvent) => {
      const newMessages = JSON.parse(event.data);
      setNessages((prevMessages) => [...prevMessages, ...newMessages]);
    });

    // close connection then component unmount
    return () => {
      // socket.addEventListener("close", (event) => {
      //   console.log("close connection");
      // });
      // dispatch(destroyConnectionTC());
    };
  }, []);

  useEffect(() => {
    messagesAncorRef.current?.scrollIntoView();
  }, [messages]);

  const messagesAncorRef = useRef<HTMLDivElement>(null);

  // send messages
  const changeMessageHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setNewMessage(event.currentTarget.value);
  };

  const sendMessageHandler = () => {
    // dispatch(sendMessageTC(newMessage));
    newMessage ? socket.send(newMessage) : alert("empty message");
    setNewMessage("");
  };

  const typingTextViewHandler = () => {
    // dispatch(typingTextTC());
  };

  return (
    <>
      <div className={classes.chatContainer}>
        <div className={classes.messagesBlock}>
          {messages.map((mes, ind) => (
            <div
              key={ind}
              className={
                mes.userId === userID
                  ? `${classes.message} ${classes.message_right}`
                  : `${classes.message} ${classes.message_left}`
              }
            >
              <img
                src={mes.photo ? mes.photo : defaultAva}
                className={classes.avatar}
                alt="avatar"
              />
              <div className={classes.messageItem}>
                <div className={classes.nameMessage}>
                  <span className={classes.name}>{mes.userName}</span>
                  <span className={classes.item}>{mes.message}</span>
                </div>
                <div className={classes.time}>
                  {new Date().toLocaleTimeString()}
                </div>
              </div>
            </div>
          ))}
          <div ref={messagesAncorRef}></div>
        </div>
        <div>
          <div className={classes.messageInput}>
            <textarea
              value={newMessage}
              onChange={changeMessageHandler}
              onKeyPress={typingTextViewHandler}
            />
            <button onClick={sendMessageHandler}>Send</button>
          </div>
          {/* {typingUsers.length !== 1 &&
            `${typingUsers.map((user) => user.name).join(" ")} typing...`} */}
        </div>
      </div>
    </>
  );
};

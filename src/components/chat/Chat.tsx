import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import defaultAva from "../../assets/img/def-image.png";
import { userIDSelector } from "../../bll/reducers/auth-reducer";
import { useAppDispatch, useAppSelector } from "../../bll/store";
import classes from "./Chat.module.css";

export const Chat = () => {
  const [name, setName] = useState<string>("");
  const [newMessage, setNewMessage] = useState<string>("");
  const [messages, setNessages] = useState([
    { userId: "", userName: "", message: "", photo: "" },
  ]);

  const userID = useAppSelector(userIDSelector);
  const dispatch = useAppDispatch();

  // socket

  useEffect(() => {
    // craete connection then component mount
    const socket = new WebSocket(
      "wss://social-network.samuraijs.com/handlers/chatHandler.ashx"
    );

    socket.addEventListener("message", (event) => {
      setNessages(JSON.parse(event.data));
      console.log(event.data);
    });

    // socket.onmessage((event) => {
    //   console.log(event.data);
    // });
    // close connection then component unmount
    // return () => {
    //   // dispatch(destroyConnectionTC());
    // };
  }, []);

  console.log(messages);

  // useEffect(() => {
  //   messagesAncorRef.current?.scrollIntoView();
  // }, [messages]);

  const messagesAncorRef = useRef<HTMLDivElement>(null);

  // add new user
  const changeNameHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value);
  };

  const setNewUser = () => {
    // dispatch(setClientNameTC(name));
    setName("");
  };

  // send messages
  const changeMessageHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setNewMessage(event.currentTarget.value);
  };

  const sendMessageHandler = () => {
    // dispatch(sendMessageTC(newMessage));
    setNewMessage("");
  };

  const typingTextViewHandler = () => {
    // dispatch(typingTextTC());
  };

  return (
    <>
      <div style={{ paddingTop: "20px", textAlign: "center" }}>
        <input value={name} onChange={changeNameHandler} />
        <button onClick={setNewUser}>add user</button>
      </div>

      <div className={classes.chatContainer}>
        <div className={classes.messagesBlock}>
          {messages.map((mes) => (
            <div
              key={mes.userId}
              className={
                mes.userId === (userID && userID.toString())
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

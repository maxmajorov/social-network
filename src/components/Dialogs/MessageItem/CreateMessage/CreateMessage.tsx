import React from "react";
import classes from "./CreateMessage.module.css";

type createMessagePropsType = {
  addMessage: any;
};

function CreateMessage(props: createMessagePropsType) {
  let newMessage: any = React.createRef();
  let addMessage = () => {
    props.addMessage(newMessage.current.value);
  };

  return (
    <div className={classes.createMessage}>
      <textarea
        className={classes.inputMessage}
        placeholder="Write something here..."
        ref={newMessage}
        cols={50}
        rows={2}
      ></textarea>
      <button className={classes.postBtn} onClick={addMessage}>
        Send message
      </button>
    </div>
  );
}

export default CreateMessage;

import React from "react";
import classes from "./CreateMessage.module.css";

function CreateMessage() {
  let newMessage: any = React.createRef();
  let addMessage = () => {
    alert(newMessage.current.value);
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

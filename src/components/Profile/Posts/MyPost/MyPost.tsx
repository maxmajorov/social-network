import React from "react";
import classes from "./MyPost.module.css";

function MyPost() {
  return (
    <div className={classes.postItem}>
      <img
        className={classes.postAvatar}
        src="../../../../img/avatar.jpg"
        alt="user-avatar"
      />
      <span>Hello everybody!</span>
    </div>
  );
}

export default MyPost;

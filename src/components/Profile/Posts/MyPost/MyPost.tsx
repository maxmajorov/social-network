import React from "react";
import classes from "./MyPost.module.css";

type MyPostsPropsType = {
  text: string;
  likes: number;
};

function MyPost(props: MyPostsPropsType) {
  return (
    <div className={classes.postItem}>
      <img
        className={classes.postAvatar}
        src="../../../../img/avatar.jpg"
        alt="user-avatar"
      />
      <span>{props.text}</span>
      <span className={classes.postLikes}>{props.likes}</span>
    </div>
  );
}

export default MyPost;

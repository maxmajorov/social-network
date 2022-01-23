import React from "react";
import classes from "./MyPost.module.css";

type MyPostsPropsType = {
  text: string;
  likes: number;
  comments: number;
};

function MyPost(props: MyPostsPropsType) {
  return (
    <div className={classes.postItem}>
      <div className={classes.postText}>
        <img
          className={classes.postAvatar}
          src="../../../../img/avatar.jpg"
          alt="user-avatar"
        />
        <span>{props.text}</span>
      </div>
      <div className={classes.postWatches}>
        <span className={classes.postLikes}>{props.likes} Likes</span>
        <span className={classes.postComments}>{props.comments} Comment</span>
      </div>
    </div>
  );
}

export default MyPost;

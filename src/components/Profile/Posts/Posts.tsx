import React from "react";
import MyPost from "./MyPost/MyPost";
import PostCreate from "./PostCreate/PostsCreate";
import classes from "./Posts.module.css";

function Posts() {
  return (
    <div className={classes.post}>
      <PostCreate />
      <div className={classes.postItem}>
        <MyPost text={"Hello everybody!"} likes={4} comments={2} />
        <MyPost text={"I'm start learning React"} likes={10} comments={4} />
        <MyPost text={"Redux & TypeScript..."} likes={5} comments={10} />
      </div>
    </div>
  );
}

export default Posts;

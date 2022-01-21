import React from "react";
import MyPost from "./MyPost/MyPost";
import classes from "./Posts.module.css";

function Posts() {
  return (
    <div className={classes.post}>
      <h3 className={classes.postTitle}>Posts</h3>
      <textarea name="" id="" cols={140} rows={10}></textarea>
      <button className={classes.postBtn}>Send</button>
      <MyPost text={"Hello everybody!"} likes={4} />
      <MyPost text={"I'm start learning React"} likes={10} />
      <MyPost text={"Redux & TypeScript..."} likes={5} />
    </div>
  );
}

export default Posts;

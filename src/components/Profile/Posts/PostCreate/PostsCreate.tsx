import React from "react";
import classes from "./PostsCreate.module.css";

function PostCreate() {
  return (
    <div className={classes.postCreate}>
      <h3 className={classes.postTitle}>Create Posts</h3>
      <textarea
        className={classes.postInput}
        placeholder="Write something here..."
        name=""
        id=""
        cols={110}
        rows={4}
      ></textarea>
      <button className={classes.postBtn}>Send post</button>
    </div>
  );
}

export default PostCreate;

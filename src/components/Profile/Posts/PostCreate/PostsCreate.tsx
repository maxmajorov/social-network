import React from "react";
import classes from "./PostsCreate.module.css";

type postCreatePropsType = {
  addPost: any;
};

function PostCreate(props: postCreatePropsType) {
  let newPost: any = React.createRef();
  let addPost = () => {
    debugger;
    props.addPost(newPost.current.value);
  };

  return (
    <div className={classes.postCreate}>
      <h3 className={classes.postTitle}>Create Posts</h3>
      <textarea
        className={classes.postInput}
        placeholder="Write something here..."
        ref={newPost}
        cols={110}
        rows={4}
      ></textarea>
      <button className={classes.postBtn} onClick={addPost}>
        Send post
      </button>
    </div>
  );
}

export default PostCreate;

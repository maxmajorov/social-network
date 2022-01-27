import React from "react";
import classes from "./PostsCreate.module.css";

type postCreatePropsType = {
  addPost: any;
  newPostText: string;
  updatePostText: any;
};

function PostCreate(props: postCreatePropsType) {
  let newPost: any = React.createRef();
  let addPost = () => {
    props.addPost();
  };

  let postTextChange = () => {
    props.updatePostText(newPost.current.value);
  };

  return (
    <div className={classes.postCreate}>
      <h3 className={classes.postTitle}>Create Posts</h3>
      <textarea
        className={classes.postInput}
        ref={newPost}
        value={props.newPostText}
        onChange={postTextChange}
        cols={110}
        rows={4}
      />
      <button className={classes.postBtn} onClick={addPost}>
        Send post
      </button>
    </div>
  );
}

export default PostCreate;

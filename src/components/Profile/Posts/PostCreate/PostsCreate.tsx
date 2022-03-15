import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import { PostObj } from "../../../../redux/state";
import classes from "./PostsCreate.module.css";

type postCreatePropsType = {
  posts: Array<PostObj>;
  addPost: (post: string) => void;
};

function PostCreate(props: postCreatePropsType) {
  const [newPost, setNewPost] = useState("");
  const [error, setError] = useState("");

  const onChangeAddPostHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setNewPost(event.currentTarget.value);
  };

  const onClickAddPostHandler = () => {
    newPost.trim().length
      ? props.addPost(newPost.trim())
      : setError("Invalin input");
    setNewPost("");
  };

  const onKeyPressInputHandler = (
    event: KeyboardEvent<HTMLTextAreaElement>
  ) => {
    event.charCode === 13 ? onClickAddPostHandler() : console.log("f");
  };

  return (
    <div className={classes.postCreate}>
      <h3 className={classes.postTitle}>Create Posts</h3>
      <textarea
        className={classes.postInput}
        placeholder="Write something here..."
        value={newPost}
        onChange={onChangeAddPostHandler}
        onKeyPress={onKeyPressInputHandler}
        cols={110}
        rows={4}
      />
      <div className={classes.errorMessage}>{error}</div>
      <button className={classes.postBtn} onClick={onClickAddPostHandler}>
        Send post
      </button>
    </div>
  );
}

export default PostCreate;

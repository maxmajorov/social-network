import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import classes from "./PostsCreate.module.css";

type PostCreatePropsType = {
  addNewPostToStore: (newPost: string) => void;
};

export const PostCreate: React.FC<PostCreatePropsType> = ({
  addNewPostToStore,
}) => {
  const [newPost, setNewPost] = useState("");
  const [error, setError] = useState("");

  const onChangeAddPostHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setNewPost(event.currentTarget.value.trim());
  };

  const onClickAddPostHandler = () => {
    newPost.length ? addNewPostToStore(newPost) : setError("Invalid input");
    setNewPost("");
  };

  const onKeyPressInputHandler = (
    event: KeyboardEvent<HTMLTextAreaElement>
  ) => {
    event.charCode === 13 ? onClickAddPostHandler() : console.log("notEnter");
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
};
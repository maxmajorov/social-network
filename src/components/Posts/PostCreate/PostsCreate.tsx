import { Button } from "antd";
import TextArea from "antd/lib/input/TextArea";
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
    setError("");
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
      <TextArea
        value={newPost}
        showCount
        maxLength={100}
        // placeholder="Write something here..."
        placeholder={error ? error : "Write something here..."}
        bordered={false}
        style={{
          height: 40,
          backgroundColor: "#edeef0",
          // borderRadius: "7px",
          border: error ? "1px solid red" : "",
        }}
        onChange={onChangeAddPostHandler}
        onKeyPress={onKeyPressInputHandler}
      />
      {/* <div className={classes.errorMessage}>{error}</div> */}
      <div className={classes.postBtn}>
        <Button type="primary" size={"large"} onClick={onClickAddPostHandler}>
          Add post
        </Button>
      </div>
    </div>
  );
};

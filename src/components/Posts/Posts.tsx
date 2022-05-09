import React from "react";
import { PostObj } from "../../reducers/profile-reducer";
import MyPost from "./MyPost/MyPost";
import { PostCreate } from "./PostCreate/PostsCreate";
import classes from "./Posts.module.css";

// Контейнерная компонента ==> вся логика и store только здесь.

type PostsPropsType = {
  postsState: Array<PostObj>;
  addNewPostToStore: (newPost: string) => void;
};

export const Posts: React.FC<PostsPropsType> = ({
  postsState,
  addNewPostToStore,
}) => {
  const postsElement = postsState.map((post) => (
    <MyPost
      key={post._id}
      text={post.text}
      likes={post.likes}
      comments={post.comments}
    />
  ));

  return (
    <div className={classes.post}>
      <PostCreate addNewPostToStore={addNewPostToStore} />
      <div className={classes.postItem}>{postsElement}</div>
    </div>
  );
};

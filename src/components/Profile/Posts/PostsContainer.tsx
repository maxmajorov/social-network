import React from "react";
import { addPostActionCreator } from "../../../redux/profile-reducer";
import { store } from "../../../redux/redux-store";
import MyPost from "./MyPost/MyPost";
import { PostCreate } from "./PostCreate/PostsCreate";
import classes from "./Posts.module.css";

// Контейнерная компонента ==> вся логика и store только здесь.
// Не правильно!!! Не переделывал

export const PostsContainer = () => {
  const postsElement = store
    .getState()
    .profileReduser.posts.map((post) => (
      <MyPost
        key={post._id}
        text={post.text}
        likes={post.likes}
        comments={post.comments}
      />
    ));

  const addNewPostToStore = (newPost: string) => {
    store.dispatch(addPostActionCreator(newPost));
  };

  return (
    <div className={classes.post}>
      <PostCreate addNewPostToStore={addNewPostToStore} />
      <div className={classes.postItem}>{postsElement}</div>
    </div>
  );
};

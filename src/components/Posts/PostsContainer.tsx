import React from "react";
import { postsSelect } from "../../bll/reducers/profile-reducer";
import { useAppSelector } from "../../bll/store";
import { CreatePostForm } from "./PostCreate/PostsCreate";
import classes from "./PostsContainer.module.css";
import { UserPosts } from "./UserPosts/UserPosts";

export const PostsContainer = () => {
  const posts = useAppSelector(postsSelect);

  const postsList = posts.map((post) => (
    <UserPosts
      key={post._id}
      text={post.text}
      likes={post.likes}
      comments={post.comments}
    />
  ));

  return (
    <div className={classes.post}>
      <CreatePostForm />
      <div className={classes.postItem}>{postsList}</div>
    </div>
  );
};

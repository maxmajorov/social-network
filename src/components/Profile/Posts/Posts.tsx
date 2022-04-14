import React from "react";
import { ActionCreatorType, PostObj } from "../../../redux/state";
import MyPost from "./MyPost/MyPost";
import { PostCreate } from "./PostCreate/PostsCreate";
import classes from "./Posts.module.css";

type PostsPropsType = {
  posts: Array<PostObj>;
  dispatch: (action: ActionCreatorType) => void;
};

const Posts: React.FC<PostsPropsType> = ({ posts, dispatch }) => {
  const postsElement = posts.map((post) => (
    <MyPost
      key={post._id}
      text={post.text}
      likes={post.likes}
      comments={post.comments}
    />
  ));

  return (
    <div className={classes.post}>
      <PostCreate dispatch={dispatch} />
      <div className={classes.postItem}>{postsElement}</div>
    </div>
  );
};

export default Posts;

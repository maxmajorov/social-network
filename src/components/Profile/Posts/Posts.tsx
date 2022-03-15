import React, { useState } from "react";
import { v1 } from "uuid";
import state, { PostObj } from "../../../redux/state";
import MyPost from "./MyPost/MyPost";
import PostCreate from "./PostCreate/PostsCreate";
import classes from "./Posts.module.css";

type PostsPropsType = {
  posts: Array<PostObj>;
};

const Posts: React.FC<PostsPropsType> = (props) => {
  let [postList, setPostList] = useState(state.profilePage.posts);

  const addPost = (post: string) => {
    let newPostList = { _id: v1(), text: post, likes: 0, comments: 0 };
    setPostList([newPostList, ...postList]);
  };

  console.log(postList);

  let postsElement = postList.map((post) => (
    <MyPost
      key={post._id}
      text={post.text}
      likes={post.likes}
      comments={post.comments}
    />
  ));

  return (
    <div className={classes.post}>
      <PostCreate posts={props.posts} addPost={addPost} />
      <div className={classes.postItem}>{postsElement}</div>
    </div>
  );
};

export default Posts;

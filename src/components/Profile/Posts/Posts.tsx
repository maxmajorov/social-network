import React from "react";
import MyPost from "./MyPost/MyPost";
import PostCreate from "./PostCreate/PostsCreate";
import classes from "./Posts.module.css";

function Posts() {
  type postsType = {
    text: string;
    likes: number;
    comments: number;
  };

  let posts: Array<postsType> = [
    { text: "Hello everybody!", likes: 4, comments: 2 },
    { text: "I'm start learning React", likes: 14, comments: 4 },
    { text: "Redux & TypeScript...", likes: 8, comments: 10 },
  ];

  let postsElement = posts.map((post) => (
    <MyPost text={post.text} likes={post.likes} comments={post.comments} />
  ));

  return (
    <div className={classes.post}>
      <PostCreate />
      <div className={classes.postItem}>{postsElement}</div>
    </div>
  );
}

export default Posts;

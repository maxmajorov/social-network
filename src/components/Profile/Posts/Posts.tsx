import React from "react";
import MyPost from "./MyPost/MyPost";
import PostCreate from "./PostCreate/PostsCreate";
import classes from "./Posts.module.css";

function Posts() {
  type postDataType = {
    text: string;
    likes: number;
    comments: number;
  };

  let postData: Array<postDataType> = [
    { text: "Hello everybody!", likes: 4, comments: 2 },
    { text: "I'm start learning React", likes: 14, comments: 4 },
    { text: "Redux & TypeScript...", likes: 8, comments: 10 },
  ];

  return (
    <div className={classes.post}>
      <PostCreate />
      <div className={classes.postItem}>
        {postData.map((el) => (
          <MyPost text={el.text} likes={el.likes} comments={el.comments} />
        ))}
      </div>
    </div>
  );
}

export default Posts;

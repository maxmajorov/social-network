import React from "react";
import MyPost from "./MyPost/MyPost";
import PostCreate from "./PostCreate/PostsCreate";
import classes from "./Posts.module.css";

type PostObj = {
  text: string;
  likes: number;
  comments: number;
};

type PostsPropsType = {
  posts: Array<PostObj>;
  addPost: any;
  newPostText: string;
  updatePostText: any;
};

const Posts: React.FC<PostsPropsType> = (props) => {
  let postsElement = props.posts.map((post) => (
    <MyPost text={post.text} likes={post.likes} comments={post.comments} />
  ));

  return (
    <div className={classes.post}>
      <PostCreate
        newPostText={props.newPostText}
        addPost={props.addPost}
        updatePostText={props.updatePostText}
      />
      <div className={classes.postItem}>{postsElement}</div>
    </div>
  );
};

export default Posts;

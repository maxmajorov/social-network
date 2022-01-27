import React from "react";
import Posts from "./Posts/Posts";
import classes from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

type postObj = {
  text: string;
  likes: number;
  comments: number;
};

type profilePropsType = {
  posts: Array<postObj>;
  addPost: any;
  newPostText: string;
  updatePostText: any;
};

function Profile(props: profilePropsType) {
  return (
    <main className={classes.profile}>
      <ProfileInfo />
      <Posts
        posts={props.posts}
        newPostText={props.newPostText}
        addPost={props.addPost}
        updatePostText={props.updatePostText}
      />
    </main>
  );
}

export default Profile;

import React from "react";
import Posts from "./Posts/Posts";
import classes from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

type PostObj = {
  text: string;
  likes: number;
  comments: number;
};

type ProfilePropsType = {
  posts: Array<PostObj>;
  addPost: any;
  newPostText: string;
  updatePostText: any;
};

const Profile: React.FC<ProfilePropsType> = (props) => {
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
};

export default Profile;

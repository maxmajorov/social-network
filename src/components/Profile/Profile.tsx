import React from "react";
import { PostObj } from "../../redux/state";
import Posts from "./Posts/Posts";
import classes from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

type ProfilePropsType = {
  posts: Array<PostObj>;
};

const Profile: React.FC<ProfilePropsType> = (props) => {
  return (
    <main className={classes.profile}>
      <ProfileInfo />
      <Posts posts={props.posts} />
    </main>
  );
};

export default Profile;

import React from "react";
import { PostsContainer } from "../Posts/PostsContainer";
import classes from "./Profile.module.css";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";

const Profile = () => {
  return (
    <main className={classes.profile}>
      <ProfileInfo />
      <PostsContainer />
    </main>
  );
};

export default Profile;

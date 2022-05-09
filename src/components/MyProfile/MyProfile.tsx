import React from "react";
import { PostsContainer } from "../Posts/PostsContainer";
import classes from "./MyProfile.module.css";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";

export const MyProfile: React.FC = () => {
  return (
    <main className={classes.profile}>
      <ProfileInfo />
      <PostsContainer />
    </main>
  );
};

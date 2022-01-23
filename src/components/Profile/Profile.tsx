import React from "react";
import Posts from "./Posts/Posts";
import classes from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile() {
  return (
    <main className={classes.profile}>
      <ProfileInfo />
      <Posts />
    </main>
  );
}

export default Profile;

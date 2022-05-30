import React from "react";
import classes from "./Profile.module.css";
import { ProfileContent } from "./ProfileInfo/ProfileContent";

const Profile: React.FC = () => {
  return (
    <main className={classes.profile}>
      <ProfileContent />
    </main>
  );
};

export default Profile;

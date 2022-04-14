import React from "react";
import { ActionCreatorType, PostObj } from "../../redux/store";
import Posts from "./Posts/Posts";
import classes from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

type ProfilePropsType = {
  posts: Array<PostObj>;
  dispatch: (action: ActionCreatorType) => void;
};

const Profile: React.FC<ProfilePropsType> = (props) => {
  return (
    <main className={classes.profile}>
      <ProfileInfo />
      <Posts posts={props.posts} dispatch={props.dispatch} />
    </main>
  );
};

export default Profile;

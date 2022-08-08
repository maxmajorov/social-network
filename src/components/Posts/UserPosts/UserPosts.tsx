import React from "react";
import defaultImage from "../../../assets/img/def-image.png";
import { profilePhotoSelect } from "../../../bll/reducers/profile-reducer";
import { useAppSelector } from "../../../bll/store";
import classes from "./UserPosts.module.css";

type MyPostsPropsType = {
  text: string;
  likes: number;
  comments: number;
};

export const UserPosts: React.FC<MyPostsPropsType> = (props) => {
  const profilePhoto = useAppSelector(profilePhotoSelect);

  return (
    <div className={classes.postItem}>
      <div className={classes.postText}>
        <img
          src={`${profilePhoto ? profilePhoto : defaultImage}`}
          alt="avatar"
          className={profilePhoto && classes.postAvatar}
        />
        <span>{props.text}</span>
      </div>
      <div className={classes.postWatches}>
        <span className={classes.postLikes}>{props.likes} Likes</span>
        <span className={classes.postComments}>{props.comments} Comment</span>
      </div>
    </div>
  );
};

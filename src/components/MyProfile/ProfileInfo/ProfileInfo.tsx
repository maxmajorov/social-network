import React from "react";
import { useSelector } from "react-redux";
import { AppStateType } from "../../../redux/redux-store";
import classes from "./ProfileInfo.module.css";
import defaultImage from "../../../assets/img/def-image.png";

export const ProfileInfo: React.FC = () => {
  const profileState = useSelector(
    (state: AppStateType) => state.profileReducer.profile
  );
  return (
    <div className={classes.profileInfo}>
      <div className={classes.picture}>
        <img src="./img/mood.jpg" alt="mood"></img>
      </div>
      <div className={classes.user}>
        <div className={classes.userAvatar}>
          <img
            src={`${
              profileState.photos.large
                ? profileState.photos.large
                : defaultImage
            }`}
            alt="avatar"
          ></img>
        </div>
        <div className={classes.userInfo}>
          <h3 className={classes.userName}>{profileState.fullName}</h3>
          <ul className={classes.userList}>
            <li className={classes.userItem}>Birthday: 10-06-1989</li>
            <li className={classes.userItem}>City: Minsk</li>
            <li className={classes.userItem}>
              {profileState.lookingForAJobDescription}
            </li>
            <li className={classes.item}>
              Mail: {profileState.contacts.mainLink}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

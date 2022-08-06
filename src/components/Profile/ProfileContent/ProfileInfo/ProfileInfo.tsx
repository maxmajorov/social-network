import React from "react";
import classes from "./ProfileInfo.module.css";
import { ProfileStatus } from "../ProfileStatus/ProfileStatus";
import { useAppSelector } from "../../../../bll/store";
import { profileSelect } from "../../../../bll/reducers/profile-reducer";

export const ProfileInfo: React.FC = () => {
  const profileState = useAppSelector(profileSelect);

  return (
    <div className={classes.userInfo}>
      <div className={classes.userName}>
        <h3>{profileState.fullName}</h3>
        <ProfileStatus />
      </div>
      <div>
        <ul className={classes.userList}>
          <li className={classes.userItem}>city: Minsk</li>
          <li className={classes.userItem}>
            {profileState.lookingForAJobDescription}
          </li>
          <li className={classes.userItem}>
            mail: {profileState.contacts.mainLink}
          </li>
          <li className={classes.userItem}>
            github:{" "}
            <a href={profileState.contacts.github}>
              {profileState.contacts.github}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

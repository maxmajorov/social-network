import React from "react";
import classes from "./ProfileInfo.module.css";
import { ProfileStatus } from "../ProfileStatus/ProfileStatus";

type ProfileInfoPropsType = {
  fullName: string;
  lookingForJobDescr: string;
  mailLink: string;
  github: string;
};

export const ProfileInfo: React.FC<ProfileInfoPropsType> = ({
  fullName,
  lookingForJobDescr,
  mailLink,
  github,
}) => {
  return (
    <div className={classes.userInfo}>
      <div className={classes.userName}>
        <h3>{fullName}</h3>
        <ProfileStatus />
      </div>
      <div>
        <ul className={classes.userList}>
          <li className={classes.userItem}>city: Minsk</li>
          <li className={classes.userItem}>{lookingForJobDescr}</li>
          <li className={classes.userItem}>mail: {mailLink}</li>
          <li className={classes.userItem}>
            github: <a href="https://github.com/maxmajorov">{github}</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

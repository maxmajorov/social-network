import React from "react";
import classes from "./ProfileInfo.module.css";
import { ProfileStatus } from "../ProfileStatus/ProfileStatus";

type ProfileInfoPropsType = {
  fullName: string;
  lookingForJobDescr: string;
  mailLink: string;
};

export const ProfileInfo: React.FC<ProfileInfoPropsType> = ({
  fullName,
  lookingForJobDescr,
  mailLink,
}) => {
  return (
    <div className={classes.userInfo}>
      <div className={classes.userName}>
        <h3>{fullName}</h3>
        <ProfileStatus />
      </div>
      <div>
        <ul className={classes.userList}>
          <li className={classes.userItem}>Birthday: 10-06-1989</li>
          <li className={classes.userItem}>City: Minsk</li>
          <li className={classes.userItem}>{lookingForJobDescr}</li>
          <li className={classes.item}>Mail: {mailLink}</li>
        </ul>
      </div>
    </div>
  );
};

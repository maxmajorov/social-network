import React from "react";
import classes from "./ProfilePhotoActions.module.css";
import defaultImage from "../../../../assets/img/def-image.png";
import { Button } from "antd";

type ProfilePhotoActionsPropsType = {
  profilePhoto: string;
};

export const ProfilePhotoActions: React.FC<ProfilePhotoActionsPropsType> = ({
  profilePhoto,
}) => {
  return (
    <div className={classes.userAvatar}>
      <img
        src={`${profilePhoto ? profilePhoto : defaultImage}`}
        alt="avatar"
      ></img>
      <Button type="primary" className={classes.editBtn}>
        Edit
      </Button>
    </div>
  );
};

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
      <div>
        <img
          src={`${profilePhoto ? profilePhoto : defaultImage}`}
          alt="avatar"
        ></img>
      </div>
      <div>
        <Button type="primary" block className={classes.editBtn}>
          Write message
        </Button>
      </div>
    </div>
  );
};

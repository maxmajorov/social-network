import React from "react";
import defaultImage from "../../../../assets/img/def-image.png";
import { Button } from "antd";
import classes from "./ProfilePhotoActions.module.css";

type ProfilePhotoPropsType = {
  profilePhoto: string;
};

export const ProfilePhotoActions: React.FC<ProfilePhotoPropsType> = ({
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

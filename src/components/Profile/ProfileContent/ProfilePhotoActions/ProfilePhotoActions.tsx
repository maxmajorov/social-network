import React from "react";
import defaultImage from "../../../../assets/img/def-image.png";
import icon from "../../../../assets/img/icon-photo-30.png";
import { Button } from "antd";
import classes from "./ProfilePhotoActions.module.css";
import Upload from "antd/lib/upload/Upload";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../bll/store";
import { userIDSelector } from "../../../../bll/reducers/auth-reducer";
import { setProfileAvatarTC } from "../../../../bll/reducers/profile-reducer";

type ProfilePhotoPropsType = {
  profilePhoto: string;
};

export const ProfilePhotoActions: React.FC<ProfilePhotoPropsType> = ({
  profilePhoto,
}) => {
  const ownerID = useAppSelector(userIDSelector);
  const { userId } = useParams();

  const dispatch = useAppDispatch();

  const uploadHandler = (file: any, fileList: any) => {
    dispatch(setProfileAvatarTC(file));
  };

  return (
    <div className={classes.userAvatar}>
      <div>
        <img
          src={`${profilePhoto ? profilePhoto : defaultImage}`}
          alt="avatar"
          className={profilePhoto && classes.avatar}
        ></img>
      </div>

      <div className={classes.btns}>
        {ownerID?.toString() === userId ? (
          <Upload
            accept=".jpg"
            beforeUpload={(file, fileList) => {
              uploadHandler(file, fileList);
            }}
            showUploadList={false}
            // onChange={uploadHandler}
          >
            {/* <CameraOutlined type={"upload"} className={classes.uploadBtn} /> */}
            <img src={icon} alt={"icon"} className={classes.uploadBtn}></img>
          </Upload>
        ) : (
          <Button type="primary" block className={classes.editBtn}>
            Write message
          </Button>
        )}
      </div>
    </div>
  );
};

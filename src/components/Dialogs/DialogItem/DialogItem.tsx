import React from "react";
import { NavLink } from "react-router-dom";
import defaultImage from "../../../assets/img/def-image.png";
import { profilePhotoSelect } from "../../../bll/reducers/profile-reducer";
import { useAppSelector } from "../../../bll/store";
import classes from "./DialogItem.module.css";

type DialogItemPropsType = {
  userName: string;
  id: string;
};

export const DialogItem: React.FC<DialogItemPropsType> = ({ userName, id }) => {
  const profilePhoto = useAppSelector(profilePhotoSelect);

  let path: string = "/dialogs/" + id; //Путь можно вынести в переменную

  return (
    <NavLink to={path} className={classes.dialog}>
      <img
        src={`${profilePhoto ? profilePhoto : defaultImage}`}
        alt="avatar"
        className={profilePhoto && classes.userAvatar}
      />
      {userName}
    </NavLink>
  );
};

import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./DialogItem.module.css";

type DialogItemPropsType = {
  userName: string;
  id: string;
};

export const DialogItem: React.FC<DialogItemPropsType> = ({ userName, id }) => {
  let path: string = "/dialogs/" + id; //Путь можно вынести в переменную

  return (
    <NavLink to={path} className={classes.dialog}>
      <img
        src="../../img/avatar.jpg"
        alt="user-avatar"
        className={classes.userAvatar}
      />
      {userName}
    </NavLink>
  );
};

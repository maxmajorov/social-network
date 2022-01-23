import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./DialogItem.module.css";

type DialogItemPropsType = {
  userName: string;
  id: string;
};

function DialogItem(props: DialogItemPropsType) {
  let path: string = "/dialogs/" + props.id; //Путь можно вынести в переменную

  return (
    <NavLink to={path} className={classes.dialog}>
      <img
        src="../../img/avatar.jpg"
        alt="user-avatar"
        className={classes.userAvatar}
      />
      {props.userName}
    </NavLink>
  );
}

export default DialogItem;

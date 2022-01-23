import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Dialogs.module.css";

function Dialogs() {
  return (
    <main className={classes.dialogs}>
      <div className={classes.dialogsList}>
        <NavLink to="" className={classes.dialog}>
          <img
            src="../../img/avatar.jpg"
            alt="user-avatar"
            className={classes.userAvatar}
          />
          Maxim
        </NavLink>
        <div className={classes.dialog}>
          <img
            src="../../img/avatar.jpg"
            alt="user-avatar"
            className={classes.userAvatar}
          />
          Olga
        </div>
        <div className={classes.dialog}>
          <img
            src="../../img/avatar.jpg"
            alt="user-avatar"
            className={classes.userAvatar}
          />
          Pavel
        </div>
        <div className={classes.dialog}>
          <img
            src="../../img/avatar.jpg"
            alt="user-avatar"
            className={classes.userAvatar}
          />
          Karina
        </div>
        <div className={classes.dialog}>
          <img
            src="../../img/avatar.jpg"
            alt="user-avatar"
            className={classes.userAvatar}
          />
          Oleg
        </div>
      </div>
      <div className={classes.messagesList}>
        <div className={classes.message}>Hello!</div>
        <div className={classes.message}>How are you?</div>
        <div className={classes.message}>i'm fine! And you?</div>
      </div>
    </main>
  );
}

export default Dialogs;

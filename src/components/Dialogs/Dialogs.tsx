import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Dialogs.module.css";

function Dialogs() {
  return (
    <main className={classes.dialogs}>
      <div className={classes.dialogsList}>
        <NavLink to="/dialogs/1" className={classes.dialog}>
          <img
            src="../../img/avatar.jpg"
            alt="user-avatar"
            className={classes.userAvatar}
          />
          Maxim
        </NavLink>
        <NavLink to="/dialogs/2" className={classes.dialog}>
          <img
            src="../../img/avatar.jpg"
            alt="user-avatar"
            className={classes.userAvatar}
          />
          Olga
        </NavLink>
        <NavLink to="/dialogs/3" className={classes.dialog}>
          <img
            src="../../img/avatar.jpg"
            alt="user-avatar"
            className={classes.userAvatar}
          />
          Pavel
        </NavLink>
        <NavLink to="/dialogs/4" className={classes.dialog}>
          <img
            src="../../img/avatar.jpg"
            alt="user-avatar"
            className={classes.userAvatar}
          />
          Karina
        </NavLink>
        <NavLink to="/dialogs/5" className={classes.dialog}>
          <img
            src="../../img/avatar.jpg"
            alt="user-avatar"
            className={classes.userAvatar}
          />
          Oleg
        </NavLink>
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

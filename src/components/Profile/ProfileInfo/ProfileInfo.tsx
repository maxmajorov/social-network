import React from "react";
import classes from "./ProfileInfo.module.css";

function ProfileInfo() {
  return (
    <div className={classes.profileInfo}>
      <div className={classes.picture}>
        <img src="./img/mood.jpg" alt="mood"></img>
      </div>
      <div className={classes.user}>
        <div className={classes.userAvatar}>
          <img src="./img/avatar.jpg" alt="avatar"></img>
        </div>
        <div className={classes.userInfo}>
          <h3 className={classes.userName}>Maxim Predko</h3>
          <ul className={classes.userList}>
            <li className={classes.userItem}>Birthday: 10-06-1989</li>
            <li className={classes.userItem}>City: Minsk</li>
            <li className={classes.userItem}>
              Education: Institute for Command Engineers
            </li>
            <li className={classes.item}>Mail: maxpredko@gmail.com</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;

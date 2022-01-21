import React from "react";
import Posts from "./Posts/Posts";
import classes from "./Profile.module.css";

function Profile() {
  return (
    <main className="profile">
      <img src="./img/mood.jpg" className={classes.picture} alt="mood"></img>
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
            <li className={`${classes.item} ${classes.itemInsert}`}>
              {/**{(classes.item, classes.itemInsert)} */}
              Mail: maxpredko@gmail.com
            </li>
          </ul>
        </div>
      </div>
      <Posts />
    </main>
  );
}

export default Profile;

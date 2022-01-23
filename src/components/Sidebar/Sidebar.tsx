import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Sidebar.module.css";

function Sidebar() {
  return (
    <aside className={classes.sidebar}>
      <ul className="sidebar__list list-reset">
        <li className={classes.item}>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              classes.link + " " + (isActive ? classes.active : "")
            }
          >
            Profile
          </NavLink>
        </li>
        <li className={classes.item}>
          <NavLink
            to="/dialogs"
            className={({ isActive }) =>
              classes.link + " " + (isActive ? classes.active : "")
            }
          >
            Messages
          </NavLink>
        </li>
        <li className={classes.item}>
          <NavLink
            to="/news"
            className={({ isActive }) =>
              classes.link + " " + (isActive ? classes.active : "")
            }
          >
            News
          </NavLink>
        </li>
        <li className={classes.item}>
          <NavLink
            to="/music"
            className={({ isActive }) =>
              classes.link + " " + (isActive ? classes.active : "")
            }
          >
            Music
          </NavLink>
        </li>
        <li className={classes.item}>
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              classes.link + " " + (isActive ? classes.active : "")
            }
          >
            Settings
          </NavLink>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;

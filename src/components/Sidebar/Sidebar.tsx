import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { userIDSelector } from "../../bll/reducers/auth-reducer";
import { getUserProfileTC } from "../../bll/reducers/profile-reducer";
import { useAppDispatch, useAppSelector } from "../../bll/store";
import classes from "./Sidebar.module.css";

export const Sidebar: React.FC = () => {
  const myProfileID = useAppSelector(userIDSelector);
  const userId = useParams();
  const dispatch = useAppDispatch();

  const loadProfileHandler = () => {
    dispatch(getUserProfileTC(userId));
  };

  return (
    <aside className={classes.sidebar}>
      <ul>
        <li className={classes.item}>
          <NavLink
            to={`/profile/${myProfileID}`}
            className={({ isActive }) =>
              classes.link + " " + (isActive ? classes.active : "")
            }
            onClick={loadProfileHandler}
          >
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <title />
              <g id="about">
                <path d="M16,16A7,7,0,1,0,9,9,7,7,0,0,0,16,16ZM16,4a5,5,0,1,1-5,5A5,5,0,0,1,16,4Z" />
                <path d="M17,18H15A11,11,0,0,0,4,29a1,1,0,0,0,1,1H27a1,1,0,0,0,1-1A11,11,0,0,0,17,18ZM6.06,28A9,9,0,0,1,15,20h2a9,9,0,0,1,8.94,8Z" />
              </g>
            </svg>
            My profile
          </NavLink>
        </li>
        <li className={classes.item}>
          <NavLink
            to="/dialogs"
            className={({ isActive }) =>
              classes.link + " " + (isActive ? classes.active : "")
            }
          >
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <defs></defs>
              <title />
              <g>
                <path d="M24,22a1,1,0,0,1-.64-.23L18.84,18H17A8,8,0,0,1,17,2h6a8,8,0,0,1,2,15.74V21a1,1,0,0,1-.58.91A1,1,0,0,1,24,22ZM17,4a6,6,0,0,0,0,12h2.2a1,1,0,0,1,.64.23L23,18.86V16.92a1,1,0,0,1,.86-1A6,6,0,0,0,23,4Z" />
                <rect height="2" width="2" x="19" y="9" />
                <rect height="2" width="2" x="14" y="9" />
                <rect height="2" width="2" x="24" y="9" />
                <path d="M8,30a1,1,0,0,1-.42-.09A1,1,0,0,1,7,29V25.74a8,8,0,0,1-1.28-15,1,1,0,1,1,.82,1.82,6,6,0,0,0,1.6,11.4,1,1,0,0,1,.86,1v1.94l3.16-2.63A1,1,0,0,1,12.8,24H15a5.94,5.94,0,0,0,4.29-1.82,1,1,0,0,1,1.44,1.4A8,8,0,0,1,15,26H13.16L8.64,29.77A1,1,0,0,1,8,30Z" />
              </g>
            </svg>
            Messages
          </NavLink>
        </li>
        <li className={classes.item}>
          <NavLink
            to="/friends"
            className={({ isActive }) =>
              classes.link + " " + (isActive ? classes.active : "")
            }
          >
            <svg viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
              <path d="M192 256c61.9 0 112-50.1 112-112S253.9 32 192 32 80 82.1 80 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C51.6 288 0 339.6 0 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zM480 256c53 0 96-43 96-96s-43-96-96-96-96 43-96 96 43 96 96 96zm48 32h-3.8c-13.9 4.8-28.6 8-44.2 8s-30.3-3.2-44.2-8H432c-20.4 0-39.2 5.9-55.7 15.4 24.4 26.3 39.7 61.2 39.7 99.8v38.4c0 2.2-.5 4.3-.6 6.4H592c26.5 0 48-21.5 48-48 0-61.9-50.1-112-112-112z" />
            </svg>
            Friends
          </NavLink>
        </li>
        <li className={classes.item}>
          <NavLink
            to="/users"
            className={({ isActive }) =>
              classes.link + " " + (isActive ? classes.active : "")
            }
          >
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <title />
              <g id="about">
                <path d="M16,16A7,7,0,1,0,9,9,7,7,0,0,0,16,16ZM16,4a5,5,0,1,1-5,5A5,5,0,0,1,16,4Z" />
                <path d="M17,18H15A11,11,0,0,0,4,29a1,1,0,0,0,1,1H27a1,1,0,0,0,1-1A11,11,0,0,0,17,18ZM6.06,28A9,9,0,0,1,15,20h2a9,9,0,0,1,8.94,8Z" />
              </g>
            </svg>
            Users
          </NavLink>
        </li>
        <li className={classes.item}>
          <NavLink
            to="/chat"
            className={({ isActive }) =>
              classes.link + " " + (isActive ? classes.active : "")
            }
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
              <g>
                <path d="M57.1 1.9c-6.5 2.3-9.6 4.5-13.8 10-4.4 5.7-5.3 9.7-5.3 23.2v11.7l-8.7.4c-13.2.7-21 5.3-26 15.6L.5 68.5l-.3 96.9C0 229 .3 264.2 1 267.9c2.2 12 10.2 22.5 21 27.9l5.5 2.7h244l5.7-2.7c7.6-3.5 14.3-9.9 18.1-17.3l3.2-6 .3-125.3.2-125.3-2.1-4.9c-2.4-5.5-8.8-12-14.6-14.7C278.7.6 271.9.5 170.5.3 67.5.1 62.3.1 57.1 1.9zm221 20l2.9 2.9V145c0 106.1-.2 120.5-1.5 123.8-2.1 4.9-5.2 8.1-10 10.3-3.8 1.8-9.3 1.9-119.5 1.9-110.3 0-115.7-.1-119.5-1.9-4.7-2.2-8.9-6.4-10.4-10.4-.8-1.9-1.1-33.8-1.1-100.1V71.3l2.4-2.6c2.6-2.8 7.2-4.1 12.7-3.5l3.4.3.5 95.7.5 95.7 2.3 2.3c3.3 3.4 9.7 3.1 12.8-.5l2.4-2.8V141.4c0-122.6-.2-118.5 4.7-121.3 1.2-.7 37.8-1 108.1-1.1h106.4l2.9 2.9z" />
                <path d="M78.3 40.4l-2.8 2.4-.3 36.1-.3 36 3 3.3 2.9 3.3 33.4.3c18.3.2 34.8 0 36.7-.3 1.8-.4 4.4-1.7 5.7-3l2.4-2.4V80.5c0-36.4-.2-38.4-3.9-41.2-1.2-.9-10.9-1.2-37.8-1.3H81.1l-2.8 2.4zm62.5 39.3l.2 23.3H94V56l23.3.2 23.2.3.3 23.2zm39.4-22.1c-2.4 1.7-2.9 4.3-1 6.2 1.7 1.7 79.9 1.7 81.6 0 1.9-1.9 1.4-4.5-1-6.2-1.9-1.4-7.4-1.6-39.8-1.6s-37.9.2-39.8 1.6zm0 28c-2.8 1.9-2.8 4.9 0 6.8 3.4 2.4 76.2 2.4 79.6 0 1.2-.8 2.2-2.4 2.2-3.4s-1-2.6-2.2-3.4c-1.9-1.4-7.4-1.6-39.8-1.6s-37.9.2-39.8 1.6zm.7 27.8c-3.2 1.6-3.6 5-.7 7 2 1.4 7 1.6 39.8 1.6s37.8-.2 39.8-1.6c2.9-2 2.5-5.4-.8-7.1-3.5-1.7-74.6-1.7-78.1.1zM76.2 142.2c-1.9 1.9-1.4 4.5 1 6.2 2 1.4 12.3 1.6 91.3 1.6s89.3-.2 91.3-1.6c2.4-1.7 2.9-4.3 1-6.2-1.7-1.7-182.9-1.7-184.6 0zm-.4 29.4c-1.1 2.3-1 2.9 1.1 4.5 2.2 1.8 5.7 1.9 91.5 1.9 79.1 0 89.4-.2 91.4-1.6 2.4-1.7 2.9-4.3 1-6.2-.9-.9-22.8-1.2-92.5-1.2H77l-1.2 2.6zm0 27.9c-.9 2.1-.8 2.8.7 4.5 1.8 1.9 3.1 2 40.6 2 33.9 0 39-.2 40.3-1.6 1.9-1.8 2.1-4.5.4-6.2-.9-.9-11.4-1.2-41-1.2H77l-1.2 2.5zm103.4-1.3c-1.7 1.7-1.5 4.4.4 6.2 1.3 1.4 6.4 1.6 40.4 1.6s39.1-.2 40.4-1.6c1.9-1.8 2.1-4.5.4-6.2-1.7-1.7-79.9-1.7-81.6 0zM75.8 227.5c-.9 2.1-.8 2.8.7 4.5 1.8 1.9 3.1 2 40.6 2 33.9 0 39-.2 40.3-1.6 1.9-1.8 2.1-4.5.4-6.2-.9-.9-11.4-1.2-41-1.2H77l-1.2 2.5zm103.4-1.3c-1.7 1.7-1.5 4.4.4 6.2 1.3 1.4 6.4 1.6 40.4 1.6s39.1-.2 40.4-1.6c1.9-1.8 2.1-4.5.4-6.2-1.7-1.7-79.9-1.7-81.6 0zM76 254.9c-1.4 2.7-1.3 3.7.6 5.5 1.3 1.4 6.4 1.6 40 1.6 24.7 0 39.2-.4 40.5-1 2.1-1.2 2.5-5 .7-6.8-.9-.9-11.4-1.2-41-1.2-38.3 0-39.8.1-40.8 1.9zm103.2-.7c-1.7 1.7-1.5 4.4.4 6.2 1.3 1.4 6.4 1.6 40.4 1.6s39.1-.2 40.4-1.6c1.9-1.8 2.1-4.5.4-6.2-1.7-1.7-79.9-1.7-81.6 0z" />
              </g>
            </svg>
            Chat
          </NavLink>
        </li>
        <li className={classes.item}>
          <NavLink
            to="/music"
            className={({ isActive }) =>
              classes.link + " " + (isActive ? classes.active : "")
            }
          >
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <path d="M29,16.5A13.08,13.08,0,0,0,25.7,8l0.7-.73L26,6.92A14.42,14.42,0,0,0,16,3,14.42,14.42,0,0,0,6,6.92L5.6,7.26,6.3,8A13.08,13.08,0,0,0,3,16.5a10.57,10.57,0,0,0,3,7.69V27H8a2,2,0,0,0,4,0V19a2,2,0,0,0-4,0H6v3.67A9.7,9.7,0,0,1,4,16.5,12,12,0,0,1,7,8.72L7.67,9.43,8,9.08A11.25,11.25,0,0,1,16,6a11.25,11.25,0,0,1,8,3.08l0.36,0.35L25,8.72a12,12,0,0,1,3,7.78,9.7,9.7,0,0,1-2,6.17V19H24a2,2,0,0,0-4,0v8a2,2,0,0,0,4,0h2V24.19A10.57,10.57,0,0,0,29,16.5ZM10,18a1,1,0,0,1,1,1v8a1,1,0,0,1-2,0V19A1,1,0,0,1,10,18ZM7,20H8v6H7V20ZM24.29,8A12.26,12.26,0,0,0,16,5,12.26,12.26,0,0,0,7.71,8L7,7.3A13.47,13.47,0,0,1,16,4a13.47,13.47,0,0,1,9,3.3ZM22,28a1,1,0,0,1-1-1V19a1,1,0,0,1,2,0v8A1,1,0,0,1,22,28Zm3-2H24V20h1v6Z" />
            </svg>
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
            <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
              <path d="M64,39A25,25,0,1,0,89,64,25,25,0,0,0,64,39Zm0,44A19,19,0,1,1,83,64,19,19,0,0,1,64,83Z" />
              <path d="M121,48h-8.93a1,1,0,0,1-.94-.68,49.9,49.9,0,0,0-2-4.85,1,1,0,0,1,.18-1.15L115.62,35a7,7,0,0,0,0-9.9L102.89,12.38a7,7,0,0,0-9.9,0l-6.31,6.31a1,1,0,0,1-1.15.18,49.76,49.76,0,0,0-4.85-2,1,1,0,0,1-.68-.94V7a7,7,0,0,0-7-7H55a7,7,0,0,0-7,7v8.93a1,1,0,0,1-.68.94,49.9,49.9,0,0,0-4.85,2,1,1,0,0,1-1.15-.18L35,12.38a7,7,0,0,0-9.9,0L12.38,25.11a7,7,0,0,0,0,9.9l6.31,6.31a1,1,0,0,1,.18,1.15,49.76,49.76,0,0,0-2,4.85,1,1,0,0,1-.94.68H7a7,7,0,0,0-7,7V73a7,7,0,0,0,7,7h8.93a1,1,0,0,1,.94.68,49.9,49.9,0,0,0,2,4.85,1,1,0,0,1-.18,1.15L12.38,93a7,7,0,0,0,0,9.9l12.73,12.73a7,7,0,0,0,9.9,0l6.31-6.31a1,1,0,0,1,1.15-.18,49.76,49.76,0,0,0,4.85,2,1,1,0,0,1,.68.94V121a7,7,0,0,0,7,7H73a7,7,0,0,0,7-7v-8.93a1,1,0,0,1,.68-.94,49.9,49.9,0,0,0,4.85-2,1,1,0,0,1,1.15.18L93,115.62a7,7,0,0,0,9.9,0l12.73-12.73a7,7,0,0,0,0-9.9l-6.31-6.31a1,1,0,0,1-.18-1.15,49.76,49.76,0,0,0,2-4.85,1,1,0,0,1,.94-.68H121a7,7,0,0,0,7-7V55A7,7,0,0,0,121,48Zm1,25a1,1,0,0,1-1,1h-8.93a7,7,0,0,0-6.6,4.69,43.9,43.9,0,0,1-1.76,4.26,7,7,0,0,0,1.35,8l6.31,6.31a1,1,0,0,1,0,1.41L98.65,111.38a1,1,0,0,1-1.41,0l-6.31-6.31a7,7,0,0,0-8-1.35,43.88,43.88,0,0,1-4.27,1.76,7,7,0,0,0-4.68,6.6V121a1,1,0,0,1-1,1H55a1,1,0,0,1-1-1v-8.93a7,7,0,0,0-4.69-6.6,43.9,43.9,0,0,1-4.26-1.76,7,7,0,0,0-8,1.35l-6.31,6.31a1,1,0,0,1-1.41,0L16.62,98.65a1,1,0,0,1,0-1.41l6.31-6.31a7,7,0,0,0,1.35-8,43.88,43.88,0,0,1-1.76-4.27A7,7,0,0,0,15.93,74H7a1,1,0,0,1-1-1V55a1,1,0,0,1,1-1h8.93a7,7,0,0,0,6.6-4.69,43.9,43.9,0,0,1,1.76-4.26,7,7,0,0,0-1.35-8l-6.31-6.31a1,1,0,0,1,0-1.41L29.35,16.62a1,1,0,0,1,1.41,0l6.31,6.31a7,7,0,0,0,8,1.35,43.88,43.88,0,0,1,4.27-1.76A7,7,0,0,0,54,15.93V7a1,1,0,0,1,1-1H73a1,1,0,0,1,1,1v8.93a7,7,0,0,0,4.69,6.6,43.9,43.9,0,0,1,4.26,1.76,7,7,0,0,0,8-1.35l6.31-6.31a1,1,0,0,1,1.41,0l12.73,12.73a1,1,0,0,1,0,1.41l-6.31,6.31a7,7,0,0,0-1.35,8,43.88,43.88,0,0,1,1.76,4.27,7,7,0,0,0,6.6,4.68H121a1,1,0,0,1,1,1Z" />
            </svg>
            Settings
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

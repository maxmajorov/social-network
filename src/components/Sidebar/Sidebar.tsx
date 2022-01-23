import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <ul className="sidebar__list list-reset">
        <li className="sidebar__item">
          <Link to="/profile" className="sidebar__link">
            Profile
          </Link>
        </li>
        <li className="sidebar__item">
          <Link to="/dialogs" className="sidebar__link">
            Messages
          </Link>
        </li>
        <li className="sidebar__item">
          <Link to="/news" className="sidebar__link">
            News
          </Link>
        </li>
        <li className="sidebar__item">
          <Link to="/music" className="sidebar__link">
            Music
          </Link>
        </li>
        <li className="sidebar__item">
          <Link to="/settings" className="sidebar__link">
            Settings
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;

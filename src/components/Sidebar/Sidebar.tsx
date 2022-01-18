import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <ul className="sidebar__list list-reset">
        <li className="sidebar__item">
          <a href="#" className="sidebar__link">
            Profile
          </a>
        </li>
        <li className="sidebar__item">
          <a href="#" className="sidebar__link">
            Messages
          </a>
        </li>
        <li className="sidebar__item">
          <a href="#" className="sidebar__link">
            News
          </a>
        </li>
        <li className="sidebar__item">
          <a href="#" className="sidebar__link">
            Music
          </a>
        </li>
        <li className="sidebar__item">
          <a href="#" className="sidebar__link">
            Settings
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;

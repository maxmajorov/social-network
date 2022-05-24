import React, { useEffect } from "react";
import classes from "./Dialogs.module.css";

function Settings() {
  useEffect(() => {
    // Потом переисать для всех страниц
    document.title = `Settings`;
    return () => {
      // cleanup
      document.title = `Social Network`;
    };
  });
  return <div>Settings</div>;
}

export default Settings;

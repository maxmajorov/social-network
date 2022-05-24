import React, { useEffect } from "react";
import classes from "./Dialogs.module.css";

function Music() {
  useEffect(() => {
    // Потом переисать для всех страниц
    document.title = `Music`;
    return () => {
      // cleanup
      document.title = `Social Network`;
    };
  });
  return <div>Music</div>;
}

export default Music;

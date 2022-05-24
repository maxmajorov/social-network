import React, { useEffect } from "react";
import classes from "./Dialogs.module.css";

function News() {
  useEffect(() => {
    // Потом переисать для всех страниц
    document.title = `News`;
    return () => {
      // cleanup
      document.title = `Social Network`;
    };
  });
  return <div>News</div>;
}

export default News;

import React from "react";
import classes from "./Header.module.css";

function Header() {
  return (
    <header className={classes.header}>
      <img src="./img/logo.png" className={classes.logo} alt="logo" />
    </header>
  );
}

export default Header;

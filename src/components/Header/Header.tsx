import React from "react";
import { Button } from "antd";
import socialLogo from "../../assets/img/social-logo.png";
import classes from "./Header.module.css";
import { useAppDispatch, useAppSelector } from "../../bll/store";
import { isLoggedInSelector, logoutTC } from "../../bll/reducers/auth-reducer";

export const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector(isLoggedInSelector);

  const indicatorClassName = `${classes.indicator} ${
    isLoggedIn ? classes.online : classes.offline
  } `;

  const signOutHandler = () => {
    dispatch(logoutTC());
  };

  return (
    <header className={classes.header}>
      <div className={classes.headerLogo}>
        <div>
          <img src={socialLogo} className={classes.logo} alt="logo" />
        </div>
        <span className={classes.title}>
          social
          <b>
            <span style={{ color: "#228be6" }}>GO</span>
          </b>
        </span>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div className={indicatorClassName} />
        {isLoggedIn ? (
          <Button type="text" onClick={signOutHandler}>
            sign out
          </Button>
        ) : (
          <Button type="text">sign in</Button>
        )}
      </div>
    </header>
  );
};

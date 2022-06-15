import React, { useState } from "react";
import { Button } from "antd";
import { AuthModal } from "../AuthModal/AuthModal";
import socialLogo from "../../assets/img/social-logo.png";
import classes from "./Header.module.css";

type HeaderType = {
  login: string | null;
  authRequest: () => void;
};

export const Header: React.FC<HeaderType> = ({ login, authRequest }) => {
  const [visible, setVisible] = useState(false);

  const classNameForIndicator = `${classes.indicator} ${
    login ? classes.online : classes.offline
  } `;

  const onCreate = (values: any) => {
    console.log("Received values of form: ", values);
    setVisible(false);
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
        <div className={classNameForIndicator} />
        <Button
          type="text"
          onClick={() => {
            setVisible(true);
          }}
        >
          sign in
        </Button>
      </div>

      <AuthModal
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
        login={login}
        authRequest={authRequest}
      />
    </header>
  );
};

import React, { useState } from "react";
import { Button } from "antd";
import classes from "./Header.module.css";
import { AuthModal } from "../AuthModal/AuthModal";

type HeaderType = {
  login: string;
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
      <div>
        <img src="./img/logo.png" className={classes.logo} alt="logo" />
        <span className={classes.title}>Social Network</span>
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

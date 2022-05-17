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
      <Button
        type="text"
        onClick={() => {
          setVisible(true);
        }}
      >
        Login
      </Button>
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

import React from "react";
import { selectLogin } from "../../bll/reducers/auth-reducer";
import { useAppSelector } from "../../bll/store";

import { Header } from "./Header";

export const HeaderContainer = () => {
  const login = useAppSelector(selectLogin);

  return (
    <>
      <Header login={login} />
    </>
  );
};

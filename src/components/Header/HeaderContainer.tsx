import React from "react";
import { useAppDispatch, useAppSelector } from "../../store/redux-store";
import { selectLogin } from "../../store/selectors";
import { authUserTC } from "../../store/thunks";
import { Header } from "./Header";

export const HeaderContainer = () => {
  const login = useAppSelector(selectLogin);
  const dispatch = useAppDispatch();

  const authRequestCallback = () => {
    console.log("auth");
    dispatch(authUserTC());
  };
  return (
    <>
      <Header login={login} authRequest={authRequestCallback} />
    </>
  );
};

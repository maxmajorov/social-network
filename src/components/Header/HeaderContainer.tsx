import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppStateType } from "../../store/redux-store";
import { authUserTC } from "../../store/thunks";
import { Header } from "./Header";

export const HeaderContainer = () => {
  const { login } = useSelector((state: AppStateType) => state.authReducer);
  const dispatch = useDispatch();

  const authRequestCallback = () => {
    console.log("auth");
    authUserTC()(dispatch);
  };
  return (
    <>
      <Header login={login} authRequest={authRequestCallback} />
    </>
  );
};

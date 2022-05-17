import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AuthResponseType, instance } from "../../api/api";
import { authorizeMeAC } from "../../store/actions";
import { Header } from "./Header";

export const HeaderContainer = () => {
  const [authData, setAuthData] = useState({
    id: 0,
    email: "",
    login: "",
  });
  const dispatch = useDispatch();

  useEffect(() => {
    instance
      .get<AuthResponseType>(`/auth/me`, {
        withCredentials: true, // При кроссдоменности
      })
      .then((response) => {
        console.log(response.data);
        setAuthData(response.data.data);
      });
  }, []);

  console.log(authData);

  const authRequestCallback = () => {
    dispatch(authorizeMeAC(authData));
    console.log("request");
  };

  return (
    <>
      <Header login={authData.login} authRequest={authRequestCallback} />
    </>
  );
};

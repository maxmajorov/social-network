import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { isLoggedInSelector } from "../../bll/reducers/auth-reducer";
import { AddNewMessageAC } from "../../bll/reducers/dialogs-reducer";
import { useAppDispatch, useAppSelector } from "../../bll/store";

import Dialogs from "./Dialogs";

const DialogsContainer = () => {
  const isLoggedIn = useAppSelector(isLoggedInSelector);
  const dispatch = useAppDispatch();
  let navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      return navigate("/authentication");
    }
  }, [navigate, isLoggedIn]);

  const addNewMessageToStoreCallback = (newMessage: string) => {
    dispatch(AddNewMessageAC(newMessage));
  };

  return <Dialogs addNewMessageToStore={addNewMessageToStoreCallback} />;
};

export default DialogsContainer;

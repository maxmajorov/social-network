import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { AddNewMessageAC } from "../../store/actions";
import { useAppDispatch, useAppSelector } from "../../store/redux-store";
import { selectIsAuth } from "../../store/selectors";
import Dialogs from "./Dialogs";

export const DialogsContainer = () => {
  const isAuth = useAppSelector(selectIsAuth);
  const dispatch = useAppDispatch();
  let navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      return navigate("/authentication");
    }
  }, [navigate, isAuth]);

  const addNewMessageToStoreCallback = (newMessage: string) => {
    dispatch(AddNewMessageAC(newMessage));
  };

  return <Dialogs addNewMessageToStore={addNewMessageToStoreCallback} />;
};

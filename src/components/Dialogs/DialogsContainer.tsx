import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { AddNewMessageAC } from "../../store/actions";
import { useAppSelector } from "../../store/redux-store";
import Dialogs from "./Dialogs";

export const DialogsContainer = () => {
  const dialogsState = useAppSelector((state) => state.dialogsReducer);
  const authState = useAppSelector((state) => state.authReducer);

  const dispatch = useDispatch();

  let navigate = useNavigate();

  useEffect(() => {
    if (!authState.isAuth) {
      return navigate("/authentication");
    }
  }, [navigate, authState.isAuth]);

  const addNewMessageToStoreCallback = (newMessage: string) => {
    dispatch(AddNewMessageAC(newMessage));
  };

  return (
    <Dialogs
      dialogsState={dialogsState}
      addNewMessageToStore={addNewMessageToStoreCallback}
    />
  );
};

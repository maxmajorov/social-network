import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { AddNewMessageAC } from "../../store/actions";
import { AppStateType } from "../../store/redux-store";
import Dialogs from "./Dialogs";

export const DialogsContainer = () => {
  const dialogsState = useSelector(
    (state: AppStateType) => state.dialogsReducer
  );

  const dispatch = useDispatch();
  const authState = useSelector((state: AppStateType) => state.authReducer);

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

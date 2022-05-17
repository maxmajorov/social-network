import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { AddNewMessageAC } from "../../store/actions";
import { AppStateType } from "../../store/redux-store";
import Dialogs from "./Dialogs";

export const DialogsContainer = () => {
  const dialogsState = useSelector(
    (state: AppStateType) => state.dialogsReducer
  );
  const dispatch = useDispatch();

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

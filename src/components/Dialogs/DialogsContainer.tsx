import React from "react";
import { addMessageActionCreator } from "../../redux/dialogs-reducer";
import { store } from "../../redux/redux-store";
import Dialogs from "./Dialogs";

export const DialogsContainer = () => {
  const state = store.getState().dialogsReduser;

  const addNewMessageToStoreCallback = (newMessage: string) => {
    store.dispatch(addMessageActionCreator(newMessage));
  };

  return (
    <Dialogs
      dialogsState={state}
      addNewMessageToStore={addNewMessageToStoreCallback}
    />
  );
};

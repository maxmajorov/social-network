import React from "react";
import { addMessageActionCreator } from "../../redux/dialogs-reducer";

import { StoreContext } from "../../StoreContext";
import Dialogs from "./Dialogs";

export const DialogsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(state) => {
        const dialogsState = state.getState().dialogsReduser;

        const addNewMessageToStoreCallback = (newMessage: string) => {
          state.dispatch(addMessageActionCreator(newMessage));
        };
        return (
          <Dialogs
            dialogsState={dialogsState}
            addNewMessageToStore={addNewMessageToStoreCallback}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

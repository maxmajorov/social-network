import { v1 } from "uuid";
import {
  rerenderEntireTree,
  DialogsPageType,
  ActionCreatorType,
} from "./state";

const ADD_NEW_MESSAGE = "ADD-NEW-MESSAGE";

export const dialogsReduser = (
  state: DialogsPageType,
  action: ActionCreatorType
) => {
  if (action.type === ADD_NEW_MESSAGE) {
    const messageItem = {
      _id: v1(),
      message: action.newItem,
    };
    state.messages = [...state.messages, messageItem]; //не мутируя

    rerenderEntireTree();
  }

  return state;
};

export const addMessageActionCreator = (newMessage: string) => ({
  type: "ADD-NEW-MESSAGE",
  newItem: newMessage,
});

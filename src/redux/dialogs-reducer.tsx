import { v1 } from "uuid";
import { rerenderEntireTree } from "./state";

const ADD_NEW_MESSAGE = "ADD-NEW-MESSAGE";

export const dialogsReduser = (state: any, action: any) => {
  if (action.type === ADD_NEW_MESSAGE) {
    let messageItem = {
      _id: v1(),
      message: action.newMessage,
    };
    state.messages = [...state.messages, messageItem]; //не мутируя

    rerenderEntireTree();
  }

  return state;
};

export const addMessageActionCreator = (newMessage: string) => ({
  type: "ADD-NEW-MESSAGE",
  newMessage: newMessage,
});

import { v1 } from "uuid";
import {
  rerenderEntireTree,
  DialogsPageType,
  ActionCreatorType,
} from "./store";

const ADD_NEW_MESSAGE = "ADD-NEW-MESSAGE";

const initialState = {
  dialogs: [
    { _id: v1(), name: "Maxim" },
    { _id: v1(), name: "Olga" },
    { _id: v1(), name: "Pavel" },
    { _id: v1(), name: "Karina" },
    { _id: v1(), name: "Dasha" },
    { _id: v1(), name: "Oleg" },
  ],
  messages: [
    { _id: v1(), message: "Hello" },
    { _id: v1(), message: "How are you?" },
    { _id: v1(), message: "I'm fine! And you?" },
    { _id: v1(), message: "Thanks! I'm OK!!!" },
    { _id: v1(), message: "Good luck! Bye!" },
    { _id: v1(), message: "Bye!" },
  ],
};

export const dialogsReduser = (
  state: DialogsPageType = initialState,
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

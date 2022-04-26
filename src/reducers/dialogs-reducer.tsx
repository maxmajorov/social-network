import { v1 } from "uuid";
import { DialogsActionsType } from "../actions/dialogs-actions";

export type DialogObj = {
  _id: string;
  name: string;
};

export type MessagesObj = {
  _id: string;
  message: string;
};

export type DialogsPageType = {
  dialogs: Array<DialogObj>;
  messages: Array<MessagesObj>;
};

export type InitialStateType = typeof initialState;

const initialState = {
  dialogs: [
    { _id: v1(), name: "Maxim" },
    { _id: v1(), name: "Olga" },
    { _id: v1(), name: "Pavel" },
    { _id: v1(), name: "Karina" },
    { _id: v1(), name: "Dasha" },
    { _id: v1(), name: "Oleg" },
  ] as Array<DialogObj>,
  messages: [
    { _id: v1(), message: "Hello" },
    { _id: v1(), message: "How are you?" },
    { _id: v1(), message: "I'm fine! And you?" },
    { _id: v1(), message: "Thanks! I'm OK!!!" },
    { _id: v1(), message: "Good luck! Bye!" },
    { _id: v1(), message: "Bye!" },
  ] as Array<MessagesObj>,
};

export const dialogsReducer = (
  state: InitialStateType = initialState,
  action: DialogsActionsType
): InitialStateType => {
  switch (action.type) {
    case "ADD-NEW-MESSAGE": {
      const messageItem = {
        _id: v1(),
        message: action.newMessage,
      };

      return { ...state, messages: [...state.messages, messageItem] };
    }
    default:
      return state;
  }
};

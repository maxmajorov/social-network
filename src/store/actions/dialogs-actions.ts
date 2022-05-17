// ===== ACTIONS =====
export const ADD_NEW_MESSAGE = "ADD-NEW-MESSAGE";

export type DialogsActionsType = AddNewMessageACType;

type AddNewMessageACType = {
  type: typeof ADD_NEW_MESSAGE;
  newMessage: string;
};

export const AddNewMessageAC = (newMessage: string): AddNewMessageACType => ({
  type: ADD_NEW_MESSAGE,
  newMessage: newMessage,
});

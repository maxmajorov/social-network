import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { AddNewMessageAC } from "../../actions/dialogs-actions";
import { AppStateType } from "../../redux/redux-store";
import Dialogs from "./Dialogs";

// type MapStateToPropsType = {
//   dialogsState: InitialStateType;
// };

// type MapDispatchToPropsType = {
//   addNewMessageToStore: (newMessage: string) => void;
// };

// const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
//   return {
//     dialogsState: state.dialogsReduser,
//   };
// };

// const mapDispatchToProps = (
//   dispatch: Dispatch<DialogsActionsType> //Dispatch импортировать именно из redux
// ): MapDispatchToPropsType => {
//   return {
//     addNewMessageToStore: (newMessage: string) => {
//       dispatch(AddNewMessageAC(newMessage));
//     },
//   };
// };

// export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps);

// export type DialogsPropsType = ConnectedProps<typeof DialogsContainer>;

// // export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType;

// export default DialogsContainer<ConnectedComponent<{}>>(Dialogs);

// ==== Получилось сделать при помощи hook useSelector & useDispatch

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

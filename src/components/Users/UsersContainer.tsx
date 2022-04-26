import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { v1 } from "uuid";
import {
  subscribeUserAC,
  showMoreUsersAC,
  setUsersAC,
} from "../../actions/users-actions";
import { UsersObjType } from "../../reducers/users-reducer";
import { AppStateType } from "../../redux/redux-store";
import { Users } from "./Users";

export const UsersContainer = () => {
  const usersState = useSelector(
    (state: AppStateType) => state.usersReducer.users
  );
  const dispatch = useDispatch();

  //  Имитируем будто user пришли с сервера и мы их хотим добавить к стейту нажатием на кнопку SHOW MORE
  const usersFromServer: Array<UsersObjType> = [
    {
      _id: v1(),
      fullname: "Tadik Siniy",
      followed: false,
      avatar: "https://avatarko.ru/img/kartinka/33/cherep_naushniki_32366.jpg",
      location: { country: "Russia", city: "Moscow" },
      description: "I wonna drink beer....",
    },
    {
      _id: v1(),
      fullname: "Kazik T.",
      followed: false,
      avatar:
        "https://avatarko.ru/img/kartinka/30/multfilm_Simpsons_Bart_29436.jpg",
      location: { country: "USA", city: "New York" },
      description: "Help me please!!!!!!!!",
    },
  ];

  const showMoreUsersCallback = () => {
    dispatch(showMoreUsersAC());
    dispatch(setUsersAC(usersFromServer)); // Временно повесил на SHOW MORE
  };

  const subscribeUserCallback = (userID: string) => {
    dispatch(subscribeUserAC(userID));
  };

  return (
    <Users
      users={usersState}
      showMoreUsers={showMoreUsersCallback}
      subscribeUser={subscribeUserCallback}
    />
  );
};

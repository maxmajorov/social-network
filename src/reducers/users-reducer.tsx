import { v1 } from "uuid";
import {
  SET_USERS,
  SHOW_MORE_USERS,
  SUBSCRIBE_USER,
  UsersActionsType,
} from "../actions/users-actions";

type LocationType = {
  country: string;
  city: string;
};

export type UsersObjType = {
  _id: string;
  fullname: string;
  followed: boolean;
  avatar: string;
  description: string;
  location: LocationType;
};

export type InitialStateType = typeof initialState;

const initialState = {
  users: [
    {
      _id: v1(),
      fullname: "Max Predko",
      followed: true,
      avatar:
        "https://www.meme-arsenal.com/memes/2860a0cb8333cc6923653a31792d4453.jpg",
      location: { country: "Belarus", city: "Minsk" },
      description: "Codding process...",
    },
    {
      _id: v1(),
      fullname: "Olga Luksha",
      followed: true,
      avatar:
        "https://avatarko.ru/img/kartinka/29/fantastika_rusalka_Ariel_28509.jpg",
      location: { country: "Belarus", city: "Minsk" },
      description: "Waiting summer...",
    },
    {
      _id: v1(),
      fullname: "Pavel Luksha",
      followed: true,
      avatar: "https://avatarko.ru/img/kartinka/17/kot_multfilm_16243.jpg",
      location: { country: "Belarus", city: "Minsk" },
      description: "Many interesting things around me!!!",
    },
    {
      _id: v1(),
      fullname: "Karina Luksha",
      followed: false,
      avatar: "https://avatarko.ru/img/avatar/11/multfilm_Timon_10391.jpg",
      location: { country: "Belarus", city: "Minsk" },
      description: "Want to relokate to Poland",
    },
    // {
    //   _id: v1(),
    //   fullname: "Tadik Siniy",
    //   followed: false,
    //   avatar: "https://avatarko.ru/img/kartinka/33/cherep_naushniki_32366.jpg",
    //   location: { country: "Russia", city: "Moscow" },
    //   description: "I wonna drink beer....",
    // },
    // {
    //   _id: v1(),
    //   fullname: "Kazik T.",
    //   followed: false,
    //   avatar:
    //     "https://avatarko.ru/img/kartinka/30/multfilm_Simpsons_Bart_29436.jpg",
    //   location: { country: "USA", city: "New York" },
    //   description: "Help me please!!!!!!!!",
    // },
  ] as Array<UsersObjType>,
};

export const usersReducer = (
  state: InitialStateType = initialState,
  action: UsersActionsType
): InitialStateType => {
  switch (action.type) {
    case SHOW_MORE_USERS: {
      console.log("showMore, do it later. Request state from server");
      console.log(state);
      return { ...state };
    }
    case SUBSCRIBE_USER: {
      return {
        ...state,
        users: state.users.map((el) =>
          el._id === action.userID ? { ...el, followed: !el.followed } : el
        ),
      };
    }
    case SET_USERS: {
      return {
        ...state,
        users: [...state.users, ...action.users],
      };
    }
    default: {
      return state;
    }
  }
};

// {... state, state.users.map(el => el.followed = action.status)}

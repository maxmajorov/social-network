import {
  FOLLOW_USER,
  SET_TOTAL_COUNT_USERS,
  GET_USERS,
  SHOW_MORE_USERS,
  UNFOLLOW_USER,
  FOLLOW_IN_PROGRESS,
  IS_FETCHING,
  UsersActionsType,
} from "../actions/users-actions";
import { UsersFromServerType } from "../../api/api";

// type LocationType = {
//   country: string;
//   city: string;
// };

// export type UsersObjType = {
//   _id: string;
//   fullname: string;
//   followed: boolean;
//   avatar: string;
//   description: string;
//   location: LocationType;
// };

// const initialState = {
//   users: [
//     {
//       _id: v1(),
//       fullname: "Max Predko",
//       followed: true,
//       avatar:
//         "https://www.meme-arsenal.com/memes/2860a0cb8333cc6923653a31792d4453.jpg",
//       location: { country: "Belarus", city: "Minsk" },
//       description: "Codding process...",
//     },
//     {
//       _id: v1(),
//       fullname: "Olga Luksha",
//       followed: true,
//       avatar:
//         "https://avatarko.ru/img/kartinka/29/fantastika_rusalka_Ariel_28509.jpg",
//       location: { country: "Belarus", city: "Minsk" },
//       description: "Waiting summer...",
//     },
//     {
//       _id: v1(),
//       fullname: "Pavel Luksha",
//       followed: true,
//       avatar: "https://avatarko.ru/img/kartinka/17/kot_multfilm_16243.jpg",
//       location: { country: "Belarus", city: "Minsk" },
//       description: "Many interesting things around me!!!",
//     },
//     {
//       _id: v1(),
//       fullname: "Karina Luksha",
//       followed: false,
//       avatar: "https://avatarko.ru/img/avatar/11/multfilm_Timon_10391.jpg",
//       location: { country: "Belarus", city: "Minsk" },
//       description: "Want to relokate to Poland",
//     },
//   ] as Array<UsersObjType>,
// };

export type initialStateType = {
  users: Array<UsersFromServerType>;
  currentPage: number;
  totalCount: number;
  isFetching: boolean;
  followProgress: boolean;
};

const initialState = {
  users: [],
  currentPage: 1,
  totalCount: 0,
  isFetching: true,
  followProgress: false,
};

export const usersReducer = (
  state: initialStateType = initialState,
  action: UsersActionsType
): initialStateType => {
  switch (action.type) {
    case SHOW_MORE_USERS: {
      console.log("showMore, do it later. Request state from server");
      return { ...state };
    }
    case FOLLOW_USER: {
      return {
        ...state,
        users: state.users.map((el) =>
          el.id.toString() === action.userID ? { ...el, followed: true } : el
        ),
      };
    }

    case UNFOLLOW_USER: {
      return {
        ...state,
        users: state.users.map((el) =>
          el.id.toString() === action.userID ? { ...el, followed: false } : el
        ),
      };
    }

    case GET_USERS: {
      return {
        ...state,
        users: action.users,
      };
    }

    case SET_TOTAL_COUNT_USERS: {
      return {
        ...state,
        totalCount: action.totalCount,
      };
    }

    case IS_FETCHING: {
      return {
        ...state,
        isFetching: action.fetch,
      };
    }

    case FOLLOW_IN_PROGRESS: {
      return {
        ...state,
        isFetching: action.fetch,
      };
    }

    default: {
      return state;
    }
  }
};

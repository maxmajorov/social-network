import { v1 } from "uuid";
import { dialogsReduser } from "./dialogs-reducer";
import { profileReduser } from "./profile-reducer";

export let rerenderEntireTree = () => {
  console.log("State is changed");
};

// PROFILE

export type PostObj = {
  _id: string;
  text: string;
  likes: number;
  comments: number;
};

export type ProfilePageType = {
  posts: Array<PostObj>;
  newPostText: string;
};

// DIALOGS

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

// FRIENDS

export type FriendsPageType = {
  _id: string;
  name: string;
  location: {
    city: string;
    country: string;
  };
  avatar: string;
};

export type ActionCreatorType = {
  type: string;
  newItem: string;
};

type StateType = {
  profilePage: ProfilePageType;
  dialogsPage: DialogsPageType;
  friends: Array<FriendsPageType>;
};

export type StorePropsType = {
  _state: StateType;
  getState: () => StateType;
  dispatch: (action: ActionCreatorType) => void;
};

export const store: StorePropsType = {
  _state: {
    profilePage: {
      posts: [
        { _id: v1(), text: "Hello everybody!", likes: 4, comments: 2 },
        { _id: v1(), text: "I'm start learning React", likes: 14, comments: 4 },
        { _id: v1(), text: "Redux & TypeScript...", likes: 8, comments: 10 },
        { _id: v1(), text: "BLL => Redux", likes: 18, comments: 1 },
      ],
      newPostText: "Write something here...",
    },
    dialogsPage: {
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
    },
    friends: [
      {
        id: "1",
        name: "Olga",
        location: {
          city: "Minsk",
          country: "Belarus",
        },
        avatar:
          "https://avatarko.ru/img/kartinka/29/fantastika_rusalka_Ariel_28509.jpg",
      },
      {
        id: "2",
        name: "Pavel",
        location: {
          city: "Minsk",
          country: "Belarus",
        },
        avatar: "https://avatarko.ru/img/kartinka/17/kot_multfilm_16243.jpg",
      },
      {
        id: "3",
        name: "Karina",
        location: {
          city: "Wroclaw",
          country: "Poland",
        },
        avatar: "https://avatarko.ru/img/avatar/11/multfilm_Timon_10391.jpg",
      },
      {
        id: "4",
        name: "Oleg",
        location: {
          city: "Kiev",
          country: "Ukraine",
        },
        avatar:
          "https://add-groups.com/uploads/mini/short/7a/1371_original.jpg",
      },
      {
        id: "5",
        name: "Volodya",
        location: {
          city: "Moscow",
          country: "Russia",
        },
        avatar:
          "https://www.meme-arsenal.com/memes/2860a0cb8333cc6923653a31792d4453.jpg",
      },
      {
        id: "5",
        name: "Kazik",
        location: {
          city: "New York",
          country: "USA",
        },
        avatar:
          "https://avatarko.ru/img/kartinka/33/cherep_naushniki_32366.jpg",
      },
      {
        id: "5",
        name: "Tadik",
        location: {
          city: "Zelva",
          country: "Belarus",
        },
        avatar:
          "https://avatarko.ru/img/kartinka/30/multfilm_Simpsons_Bart_29436.jpg",
      },
    ],
  },
  getState() {
    return this._state;
  },
  dispatch(action: ActionCreatorType) {
    store._state.dialogsPage = dialogsReduser(store._state.dialogsPage, action); // можно сразу присвоить новый кусок state который вернет reducer
    store._state.profilePage = profileReduser(store._state.profilePage, action);
  },
};

export const subscribe = (observer: any) => {
  rerenderEntireTree = observer;
  console.log("subscribe");
};

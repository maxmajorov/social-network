import { v1 } from "uuid";

const ADD_NEW_FRIEND = "ADD-NEW-FRIEND";

type LocationType = {
  city: string;
  country: string;
};

type FriendsPageType = {
  _id: string;
  name: string;
  location: LocationType;
  avatar: string;
};

const initialState = {
  friends: [
    {
      _id: v1(),
      name: "Olga",
      location: {
        city: "Minsk",
        country: "Belarus",
      },
      avatar:
        "https://avatarko.ru/img/kartinka/29/fantastika_rusalka_Ariel_28509.jpg",
    },
    {
      _id: v1(),
      name: "Pavel",
      location: {
        city: "Minsk",
        country: "Belarus",
      },
      avatar: "https://avatarko.ru/img/kartinka/17/kot_multfilm_16243.jpg",
    },
    {
      _id: v1(),
      name: "Karina",
      location: {
        city: "Wroclaw",
        country: "Poland",
      },
      avatar: "https://avatarko.ru/img/avatar/11/multfilm_Timon_10391.jpg",
    },
    {
      _id: v1(),
      name: "Oleg",
      location: {
        city: "Kiev",
        country: "Ukraine",
      },
      avatar: "https://add-groups.com/uploads/mini/short/7a/1371_original.jpg",
    },
    {
      _id: v1(),
      name: "Volodya",
      location: {
        city: "Moscow",
        country: "Russia",
      },
      avatar:
        "https://www.meme-arsenal.com/memes/2860a0cb8333cc6923653a31792d4453.jpg",
    },
    {
      _id: v1(),
      name: "Kazik",
      location: {
        city: "New York",
        country: "USA",
      },
      avatar: "https://avatarko.ru/img/kartinka/33/cherep_naushniki_32366.jpg",
    },
    {
      _id: v1(),
      name: "Tadik",
      location: {
        city: "Zelva",
        country: "Belarus",
      },
      avatar:
        "https://avatarko.ru/img/kartinka/30/multfilm_Simpsons_Bart_29436.jpg",
    },
  ],
};

export const friendsReducer = (state = initialState, action: any) => {
  return state;
};

export const addFriendActionCreator = (newFriend: string) => ({
  type: "ADD-NEW-FRIEND",
  newItem: newFriend,
});

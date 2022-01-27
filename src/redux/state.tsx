import { rerenderEntireTree } from "../render";

// PROFILE

type postObj = {
  text: string;
  likes: number;
  comments: number;
};

type profilePageType = {
  posts: Array<postObj>;
};

// DIALOGS

type dialogObj = {
  id: string;
  name: string;
};

type messagesObj = {
  id: string;
  message: string;
};

type dialogsPageType = {
  dialogs: Array<dialogObj>;
  messages: Array<messagesObj>;
};

// FRIENDS

type friendsObj = {
  id: string;
  name: string;
  location: {
    city: string;
    country: string;
  };
  avatar: string;
};

type stateType = {
  profilePage: profilePageType;
  dialogsPage: dialogsPageType;
  friends: Array<friendsObj>;
};

let state: stateType = {
  profilePage: {
    posts: [
      { text: "Hello everybody!", likes: 4, comments: 2 },
      { text: "I'm start learning React", likes: 14, comments: 4 },
      { text: "Redux & TypeScript...", likes: 8, comments: 10 },
      { text: "BLL => Redux", likes: 18, comments: 1 },
    ],
  },
  dialogsPage: {
    dialogs: [
      { id: "1", name: "Maxim" },
      { id: "2", name: "Olga" },
      { id: "3", name: "Pavel" },
      { id: "4", name: "Karina" },
      { id: "5", name: "Dasha" },
      { id: "6", name: "Oleg" },
    ],
    messages: [
      { id: "1", message: "Hello" },
      { id: "2", message: "How are you?" },
      { id: "3", message: "I'm fine! And you?" },
      { id: "4", message: "Thanks! I'm OK!!!" },
      { id: "5", message: "Good luck! Bye!" },
      { id: "6", message: "Bye!" },
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
      avatar: "https://add-groups.com/uploads/mini/short/7a/1371_original.jpg",
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
      avatar: "https://avatarko.ru/img/kartinka/33/cherep_naushniki_32366.jpg",
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
};

export let addPost = (postMessage: string): void => {
  let postItem = {
    text: postMessage,
    likes: 0,
    comments: 0,
  };
  state.profilePage.posts.push(postItem);
  rerenderEntireTree(state);
};

export let addMessage = (newMessage: string) => {
  let messageItem = {
    id: "7",
    message: newMessage,
  };
  state.dialogsPage.messages.push(messageItem);
  rerenderEntireTree(state);
};

export default state;

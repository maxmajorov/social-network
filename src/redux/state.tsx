type postObj = {
  text: string;
  likes: number;
  comments: number;
};

type profilePageType = {
  posts: Array<postObj>;
};

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

type stateType = {
  profilePage: profilePageType;
  dialogsPage: dialogsPageType;
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
    ],
  },
};

export default state;

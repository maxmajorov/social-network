import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// POSTS
type postsType = {
  text: string;
  likes: number;
  comments: number;
};

let posts: Array<postsType> = [
  { text: "Hello everybody!", likes: 4, comments: 2 },
  { text: "I'm start learning React", likes: 14, comments: 4 },
  { text: "Redux & TypeScript...", likes: 8, comments: 10 },
  { text: "BLL => Redux", likes: 18, comments: 1 },
];

//DIALOGS

type dialogsType = {
  id: string;
  name: string;
};

let dialogs: Array<dialogsType> = [
  { id: "1", name: "Maxim" },
  { id: "2", name: "Olga" },
  { id: "3", name: "Pavel" },
  { id: "4", name: "Karina" },
  { id: "5", name: "Dasha" },
  { id: "6", name: "Oleg" },
];

//MESSAGES

type messagesType = {
  id: string;
  message: string;
};

let messages: Array<messagesType> = [
  { id: "1", message: "Hello" },
  { id: "2", message: "How are you?" },
  { id: "3", message: "I'm fine! And you?" },
  { id: "4", message: "Thanks! I'm OK!!!" },
  { id: "5", message: "Good luck!" },
];

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

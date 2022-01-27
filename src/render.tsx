import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { addPost, addMessage, updatePostText } from "./redux/state";

export let rerenderEntireTree = (state: any) => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        posts={state.profilePage.posts}
        dialogs={state.dialogsPage.dialogs}
        messages={state.dialogsPage.messages}
        friends={state.friends}
        addPost={addPost}
        newPostText={state.profilePage.newPostText}
        updatePostText={updatePostText}
        addMessage={addMessage}
      />
    </React.StrictMode>,
    document.getElementById("root")
  );
};

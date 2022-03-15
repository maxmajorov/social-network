import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { addMessage, StatePropsType } from "./redux/state";

export let rerenderEntireTree = (state: StatePropsType) => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        posts={state.profilePage.posts}
        dialogs={state.dialogsPage.dialogs}
        messages={state.dialogsPage.messages}
        friends={state.friends}
        addMessage={addMessage}
      />
    </React.StrictMode>,
    document.getElementById("root")
  );
};

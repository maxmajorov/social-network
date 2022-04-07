import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import state, { subscribe } from "./redux/state";
import App from "./App";
import { addMessage, dispatch } from "./redux/state";

let rerenderEntireTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        posts={state.profilePage.posts}
        dialogs={state.dialogsPage.dialogs}
        messages={state.dialogsPage.messages}
        friends={state.friends}
        addMessage={addMessage}
        dispatch={dispatch}
      />
    </React.StrictMode>,
    document.getElementById("root")
  );
};

subscribe(rerenderEntireTree);

rerenderEntireTree();
reportWebVitals();

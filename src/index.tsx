import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { store, subscribe } from "./redux/store";
import App from "./App";

let rerenderEntireTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        posts={store.getState().profilePage.posts}
        dialogs={store.getState().dialogsPage.dialogs}
        messages={store.getState().dialogsPage.messages}
        friends={store.getState().friends}
        dispatch={store.dispatch}
      />
    </React.StrictMode>,
    document.getElementById("root")
  );
};

subscribe(rerenderEntireTree);

rerenderEntireTree();
reportWebVitals();

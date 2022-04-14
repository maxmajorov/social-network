import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { store } from "./redux/redux-store";
import App from "./App";

let rerenderEntireTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App
      // posts={store.getState().profileReduser.posts}
      // dialogs={store.getState().dialogsReduser.dialogs}
      // messages={store.getState().dialogsReduser.messages}
      // friends={store.getState().friendsReduser.friends}
      // dispatch={store.dispatch}
      />
    </React.StrictMode>,
    document.getElementById("root")
  );
};

// rerenderEntireTree();

store.subscribe(rerenderEntireTree);

rerenderEntireTree();
reportWebVitals();

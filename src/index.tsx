import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { store } from "./redux/redux-store";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "./StoreContext";

let rerenderEntireTree = () => {
  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>,
    document.getElementById("root")
  );
};

store.subscribe(rerenderEntireTree);

rerenderEntireTree();
reportWebVitals();

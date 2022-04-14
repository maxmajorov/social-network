import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
import {
  DialogObj,
  MessagesObj,
  PostObj,
  FriendsPageType,
  ActionCreatorType,
} from "./redux/store";

type AppPropsType = {
  posts: Array<PostObj>;
  dialogs: Array<DialogObj>;
  messages: Array<MessagesObj>;
  friends: Array<FriendsPageType>;
  dispatch: (action: ActionCreatorType) => void;
};

const App: React.FC<AppPropsType> = (props) => {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Sidebar friends={props.friends} />
        <div className="container-content">
          <Routes>
            <Route
              path="/profile"
              element={
                <Profile posts={props.posts} dispatch={props.dispatch} />
              }
            />
            <Route
              path="/dialogs/*"
              element={
                <Dialogs
                  dialogs={props.dialogs}
                  messages={props.messages}
                  dispatch={props.dispatch}
                />
              }
            />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
            <Route
              path="/friends"
              element={<Friends friends={props.friends} />}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

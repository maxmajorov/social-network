import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
import { store } from "./redux/redux-store";
import { DialogsContainer } from "./components/Dialogs/DialogsContainer";

// type AppPropsType = {
// posts: Array<PostObj>;
// dialogs: Array<DialogObj>;
// messages: Array<MessagesObj>;
// friends: Array<FriendsPageType>;
// dispatch: (action: ActionCreatorType) => void;
// };

const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Sidebar friends={store.getState().friendsReduser.friends} />
        <div className="container-content">
          <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/dialogs/*" element={<DialogsContainer />} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
            <Route
              path="/friends"
              element={
                <Friends friends={store.getState().friendsReduser.friends} />
              }
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

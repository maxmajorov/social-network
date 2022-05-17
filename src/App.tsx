import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
import { store } from "./store/redux-store";
import { DialogsContainer } from "./components/Dialogs/DialogsContainer";
import { UsersContainer } from "./components/Users/UsersContainer";
import { ProfileContainer } from "./components/Profile/ProfileContainer";
import { MyProfile } from "./components/MyProfile/MyProfile";
import { HeaderContainer } from "./components/Header/HeaderContainer";

const App = () => {
  return (
    <div className="container">
      <HeaderContainer />
      <Sidebar friends={store.getState().friendsReducer.friends} />
      <div className="container-content">
        <Routes>
          <Route path="/profile" element={<MyProfile />} />
          <Route path="/profile/:userId" element={<ProfileContainer />} />
          <Route path="/dialogs/*" element={<DialogsContainer />} />
          <Route path="/users" element={<UsersContainer />} />
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
          <Route path="/settings" element={<Settings />} />
          <Route
            path="/friends"
            element={
              <Friends friends={store.getState().friendsReducer.friends} />
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;

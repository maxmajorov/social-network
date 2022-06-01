import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
import { DialogsContainer } from "./components/Dialogs/DialogsContainer";
import { UsersContainer } from "./components/Users/UsersContainer";
import { ProfileContainer } from "./components/Profile/ProfileContainer";
import { HeaderContainer } from "./components/Header/HeaderContainer";
import { Login } from "./components/LoginForm/LoginForm";

const App = () => {
  return (
    <div className="container">
      <HeaderContainer />
      <Sidebar />
      <div className="container-content">
        <Routes>
          <Route path="/authentication" element={<Login />} />
          <Route path="/profile/" element={<ProfileContainer />} />
          <Route path="/profile/:userId" element={<ProfileContainer />} />
          <Route path="/dialogs/*" element={<DialogsContainer />} />
          <Route path="/users" element={<UsersContainer />} />
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/friends" element={<Friends />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;

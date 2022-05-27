import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
import { AppStateType } from "./store/redux-store";
import { DialogsContainer } from "./components/Dialogs/DialogsContainer";
import { UsersContainer } from "./components/Users/UsersContainer";
import { ProfileContainer } from "./components/Profile/ProfileContainer";
import { MyProfile } from "./components/MyProfile/MyProfile";
import { HeaderContainer } from "./components/Header/HeaderContainer";
import { AuthModal } from "./components/AuthModal/AuthModal";
import { useSelector } from "react-redux";
import { Login } from "./components/AuthModal/Login";

const App = () => {
  const state = useSelector((state: AppStateType) => state);
  return (
    <div className="container">
      <HeaderContainer />
      <Sidebar friends={state.friendsReducer.friends} />
      <div className="container-content">
        <Routes>
          <Route path="/authentication" element={<Login />} />
          <Route path="/profile" element={<MyProfile />} />
          <Route path="/profile/:userId" element={<ProfileContainer />} />
          <Route path="/dialogs/*" element={<DialogsContainer />} />
          <Route path="/users" element={<UsersContainer />} />
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
          <Route path="/settings" element={<Settings />} />
          <Route
            path="/friends"
            element={<Friends friends={state.friendsReducer.friends} />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;

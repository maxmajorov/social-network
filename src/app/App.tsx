import React, { Suspense, useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Sidebar } from "../components/Sidebar/Sidebar";
import Music from "../components/Music/Music";
import News from "../components/News/News";
import Settings from "../components/Settings/Settings";
import { Friends } from "../components/Friends/Friends";
import { ProfileContainer } from "../components/Profile/ProfileContainer";
import { Login } from "../components/LoginForm/LoginForm";
import { useAppDispatch, useAppSelector } from "../bll/store";
import { Preloader } from "../components/Preloader/Preloader";
import {
  initializeAppSelect,
  initializeAppTC,
} from "../bll/reducers/app-reducer";
import { Header } from "../components/Header/Header";
const DialogsContainer = React.lazy(
  () => import("../components/Dialogs/DialogsContainer")
);
// import { DialogsContainer } from "../components/Dialogs/DialogsContainer";
// import { UsersContainer } from "../components/Users/UsersContainer";
const UsersContainer = React.lazy(
  () => import("../components/Users/UsersContainer")
);

export const App = () => {
  const appInitialize = useAppSelector(initializeAppSelect);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(initializeAppTC());
  }, []);

  return !appInitialize ? (
    <Preloader />
  ) : (
    <div className="container">
      <Header />
      <Sidebar />
      <div className="container-content">
        <Routes>
          <Route path={"/"} element={<Login />} />
          <Route path="/authentication" element={<Login />} />
          <Route path="/profile/:userId" element={<ProfileContainer />} />
          <Route
            path="/dialogs/*"
            element={
              <Suspense fallback={<Preloader />}>
                <DialogsContainer />
              </Suspense>
            }
          />
          <Route
            path="/users"
            element={
              <Suspense fallback={<Preloader />}>
                <UsersContainer />
              </Suspense>
            }
          />
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/friends" element={<Friends />} />
        </Routes>
      </div>
    </div>
  );
};

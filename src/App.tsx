import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";

type postObj = {
  text: string;
  likes: number;
  comments: number;
};

type dialogObj = {
  id: string;
  name: string;
};

type messagesObj = {
  id: string;
  message: string;
};

type friendsObj = {
  id: string;
  name: string;
  location: {
    city: string;
    country: string;
  };
  avatar: string;
};

type appPropsType = {
  posts: Array<postObj>;
  dialogs: Array<dialogObj>;
  messages: Array<messagesObj>;
  friends: Array<friendsObj>;
  addPost: any;
  addMessage: any;
  newPostText: string;
  updatePostText: any;
};

function App(props: appPropsType) {
  return (
    <Router>
      <div className="container">
        <Header />
        <Sidebar friends={props.friends} />
        <div className="container-content">
          <Routes>
            <Route
              path="/profile"
              element={
                <Profile
                  posts={props.posts}
                  newPostText={props.newPostText}
                  addPost={props.addPost}
                  updatePostText={props.updatePostText}
                />
              }
            />
            <Route
              path="/dialogs/*"
              element={
                <Dialogs
                  dialogs={props.dialogs}
                  messages={props.messages}
                  addMessage={props.addMessage}
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
            {/* <Redirect from="/" to="/profile" /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

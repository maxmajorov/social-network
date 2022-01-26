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

// type postObj = {
//   text: string;
//   likes: number;
//   comments: number;
// };

// type dialogObj = {
//   id: string;
//   name: string;
// };

// type messagesObj = {
//   id: string;
//   message: string;
// };

// type appPropsType = {
//   posts: Array<postObj>;
//   dialogs: Array<dialogObj>;
//   messages: Array<messagesObj>;
//   state: any;
// };

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

type appPropsType = {
  posts: Array<postObj>;
  dialogs: Array<dialogObj>;
  messages: Array<messagesObj>;
};

// type appPropsType = {
//   state: stateType;
// };

function App(props: appPropsType) {
  return (
    <Router>
      <div className="container">
        <Header />
        <Sidebar />
        <div className="container-content">
          <Routes>
            <Route path="/profile" element={<Profile posts={props.posts} />} />
            <Route
              path="/dialogs/*"
              element={
                <Dialogs dialogs={props.dialogs} messages={props.messages} />
              }
            />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
            {/* <Redirect from="/" to="/profile" /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

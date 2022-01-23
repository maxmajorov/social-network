import React from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";

function App() {
  return (
    <div className="container">
      <Header />
      <Sidebar />
      <div className="container-content">
        <Dialogs />
        {/* <Profile /> */}
      </div>
    </div>
  );
}

export default App;

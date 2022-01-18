import React from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profilet";
import "./App.css";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Sidebar />
      <Profile />
    </div>
  );
}

export default App;

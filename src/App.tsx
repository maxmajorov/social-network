import React from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Sidebar />
      <Profile />
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app-wrapper">
      <header className="app-header">
        <img src="./img/logo.png" className="app-logo" alt="logo" />
      </header>
      <aside className="app-sidebar">
        <ul>
          <li>
            <a href="#">Profile</a>
          </li>
          <li>
            <a href="#">Messages</a>
          </li>
          <li>
            <a href="#">News</a>
          </li>
          <li>
            <a href="#">Music</a>
          </li>
          <li>
            <a href="#">Settings</a>
          </li>
        </ul>
      </aside>
      <main className="app-content">
        <img src="./img/mood.jpg" alt="mood"></img>
        <div className="user-container">
          <div className="user-avatar">
            <img src="./img/avatar.jpg" alt="avatar"></img>
          </div>
          <div className="user-info">
            <h3>Predko Max</h3>
            <ul>
              <li>Birthday: 10-06-1989</li>
              <li>City: Minsk</li>
              <li>Education: Institute for Command Engineers</li>
              <li>Mail: maxpredko@gmail.com</li>
            </ul>
          </div>
        </div>
        <div className="post">
          <h3>Posts</h3>
          <textarea name="" id="" cols={140} rows={10}></textarea>
          <button>Send</button>
        </div>
      </main>
    </div>
  );
}

export default App;

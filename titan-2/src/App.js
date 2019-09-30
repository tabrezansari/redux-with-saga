import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Auth from "./app/scenes/Auth/Auth";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Titan - 2 Initial Code-Base Setup</p>
      </header>
      <Auth />
    </div>
  );
}

export default App;

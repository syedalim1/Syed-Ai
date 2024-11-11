import React from "react";
import Sidebar from "./Components/SideBar/Sidebar";
import Main from "./Components/Main/Main";
import './App.css'

const App = () => {
  return <div className="app">
    <Sidebar/>
    <Main/>
  </div>;
};

export default App;

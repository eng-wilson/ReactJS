// eslint-disable-next-line
import React, { Component } from "react";
import Header from "./components/Header";
import "./styles.css";
// eslint-disable-next-line
import api from "./services/api";
import Main from "./pages/main";
import Routes from "./routes";

const App = () => (
  <div className="App">
    <Header />
    <Routes />
  </div>
);

export default App;

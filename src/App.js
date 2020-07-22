import React, { Component } from "react";
import Home from "./components/HomeComp";
import Navbar from "./components/Navbar";
import "fdweb/fluent.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Home />
      </div>
    );
  }
}

export default App;

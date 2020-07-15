import React, { Component } from "react";
import Prizes from "./Prizes";
import About from "./About";

class Home extends Component {
  render() {
    return (
      <div>
        <About />
        <Prizes />
      </div>
    );
  }
}

export default Home;

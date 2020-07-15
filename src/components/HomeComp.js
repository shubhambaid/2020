import React, { Component } from "react";
import Prizes from "./Prizes";
import About from "./About";

class Home extends Component {
  render() {
    return (
      <div>
        <Prizes />
        <About />
        <Footer/>
      </div>
    );
  }
}

export default Home;

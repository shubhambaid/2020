import React, { Component } from "react";
import Cover from "./Cover";
import Prizes from "./Prizes";
import Schedule from "./Schedule";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="top-top">
        <Cover />
        <Schedule />
        <Prizes />
        </div>
      </div>
    );
  }
}

export default Home;

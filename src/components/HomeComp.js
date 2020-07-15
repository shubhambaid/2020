import React, { Component } from "react";
import Header from "./HeaderComp";
import Footer from "./FooterComp";
import Cover from "./Cover";
import Prizes from "./Prizes";

class Home extends Component {
  render() {
    return (
      <div>
        <Cover />
        <Prizes />
      </div>
    );
  }
}

export default Home;

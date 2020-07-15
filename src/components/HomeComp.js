import React, { Component } from "react";
import { render } from "@testing-library/react";
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
        <Footer />
      </div>
    );
  }
}

export default Home;

import React, { Component } from "react";
import { render } from "@testing-library/react";
import Header from "./HeaderComp";
import Footer from "./FooterComp";
import Cover from "./Cover";

class Home extends Component {
  render() {
    return (
      <div>
        
        <Cover/>
        <Footer />
      </div>
    );
  }
}

export default Home;

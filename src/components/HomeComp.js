import React, { Component } from "react";
import Footer from "./FooterComp";
import Navbar from "./Navbar";
import Sponsors from "./Sponsors";
import Prizes from "./Prizes";
import About from "./About";
import Cover from "./Cover";
import Prizes from "./Prizes";
import Schedule from "./Schedule";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="top-top">
          <Cover />
          <About />
          <Schedule />
          <Prizes />
          <Footer/>
        </div>
      </div>
    );
  }
}

export default Home;

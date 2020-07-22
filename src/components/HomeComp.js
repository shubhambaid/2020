import React, { Component } from "react";
import Footer from "./FooterComp";
import Navbar from "./Navbar";
import Sponsors from "./Sponsors";
import Prizes from "./Prizes";
import Cover from "./Cover";
import Schedule from "./Schedule";
import About from "./About";

class Home extends Component {
  render() {
    return (

      <div>
        <Cover />
        <Navbar />
        <Prizes />
        <Schedule />
        <Sponsors />
        <Footer />
      </div>
    );
  }
}

export default Home;

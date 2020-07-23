import React, { Component } from "react";
import Footer from "./FooterComp";
import Sponsors from "./Sponsors";
import Prizes from "./Prizes";
import Cover from "./Cover";
import About from "./About";
import Schedule from "./Schedule";
import FAQ from "./FAQ";
class Home extends Component {
  render() {
    return (

      <div>
        <Cover />
        <About />
        <Prizes />
        <Schedule />
        <Sponsors />
        <Footer />
      </div>
    );
  }
}

export default Home;

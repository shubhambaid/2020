import React, { Component } from "react";
import Footer from "./FooterComp";
import Sponsors from "./Sponsors";
import Prizes from "./Prizes";
import Cover from "./Cover";
import Schedule from "./Schedule";

class Home extends Component {
  render() {
    return (

      <div>
        <Cover />
        <Prizes />
        <Schedule />
        <Sponsors />
        <Footer />
      </div>
    );
  }
}

export default Home;

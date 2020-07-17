import React, { Component } from "react";
import Footer from "./FooterComp";
import Navbar from "./Navbar";
import Sponsors from "./Sponsors";
import Prizes from "./Prizes";
import Cover from "./Cover";
import Schedule from "./Schedule";

class Home extends Component {
  render() {
    return (
      

        <div className="top-top">
          <Cover />
          <Schedule />
          <Prizes />
          <Footer />
        </div>
    
    );
  }
}

export default Home;

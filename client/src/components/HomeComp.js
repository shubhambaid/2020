import React, { Component } from "react";
import Footer from "./FooterComp";
import Sponsors from "./Sponsors";
import Prizes from "./Prizes";
import Cover from "./Cover";
import About from "./About";
import Schedule from "./Schedule";

class Home extends Component {
  render() {

    const hideloader = () =>{
      document.getElementById("loadScreen").style.display="none";
    }
  
    return (

      <section className="home" onLoad={hideloader}>

        <div id="loadScreen" class="modal_container" style={{display: "block", background: "#2e2e2eee",  backdropFilter: "blur(20px)"}}>
            <div class="center middle">
                <div class="simple_progress_bar"></div>
            </div>
        </div>


        <div>
          <Cover />
          <About />
          <Prizes />
          <Schedule />
          <Sponsors />
          <Footer />
        </div>

      </section>
    );
  }
}

export default Home;

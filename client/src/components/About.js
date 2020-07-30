import React, { Component } from "react";
import "../css/About.css";
import slideImage from "../images/Final-01.png";

class About extends Component {
  render() {
    
    const showslide1 = () =>{
      document.getElementById("slide1").style.display="block";
      document.getElementById("slide2").style.display="none";
      document.getElementById("slide3").style.display="none";
    }

    const showslide2 = () =>{
      document.getElementById("slide2").style.display="block";
      document.getElementById("slide1").style.display="none";
      document.getElementById("slide3").style.display="none";
    }

    const showslide3 = () =>{
      document.getElementById("slide3").style.display="block";
      document.getElementById("slide1").style.display="none";
      document.getElementById("slide2").style.display="none";
    }


    return (
      <section onLoad={showslide1} style={{padding: "0px 14px"}}>

        <div className="column large10 medium12 small12 center" id="slide1">
          <br /><br />
          <div className="column large6 medium6 small12">
            <h5>REVA Hack 2020</h5><br />
            <h6 style={{fontSize: "18px", lineHeight: "1.25"}} className="ta_justify">
              auctor augue mauris augue neque gravida in fermentum et sollicitudin ac orci
              phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam 
              nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum consequat nisl 
              vel pretium lectus quam id leo in vitae turpis massa sed elementum tempus egestas 
              sed sed risus pretium quam vulputate dignissim suspendisse in est ante in nibh 
              mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo 
              elit at imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis urna 
              id volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim convallis 
              aenean et tortor.
            </h6><br /><br />
            </div>
          <div className="column large6 medium6 small0">
            <img src={slideImage} alt="altimage" />
          </div>
          <br /><br />
          <div className="column large10 medium10 small12 center">
            <button className="left icon circular" onClick={showslide3}>
              <i className="ms-Icon ms-Icon--Back slideicon"></i>
            </button>
            <button className="right icon circular" onClick={showslide2}>
              <i className="ms-Icon ms-Icon--Forward slideicon"></i>
            </button>
          </div>
          <br /><br />
          <br /><br />
        </div>


      <div className="column large10 medium12 small12 center" id="slide2">
        <br /><br />
        <div className="column large6 medium6 small0">
          <img src={slideImage} alt="altimage" />
        </div>
        <div className="column large6 medium6 small12">
          <h5>REVA University</h5><br />
          <h6 style={{fontSize: "18px", lineHeight: "1.25"}} className="ta_justify">
            auctor augue mauris augue neque gravida in fermentum et sollicitudin ac orci
            phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam 
            nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum consequat nisl 
            vel pretium lectus quam id leo in vitae turpis massa sed elementum tempus egestas 
            sed sed risus pretium quam vulputate dignissim suspendisse in est ante in nibh 
            mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo 
            elit at imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis urna 
            id volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim convallis 
            aenean et tortor.
          </h6><br /><br />
        </div>
        <br /><br />
          <div className="column large10 medium10 small12 center">
            <button className="left icon circular" onClick={showslide1}>
              <i className="ms-Icon ms-Icon--Back slideicon"></i>
            </button>
            <button className="right icon circular" onClick={showslide3}>
              <i className="ms-Icon ms-Icon--Forward slideicon"></i>
            </button>
          </div>
          <br /><br />
          <br /><br />
      </div>
        
        
      <div className="column large10 medium12 small12 center" id="slide3">
        <br /><br />
        <div className="column large6 medium6 small12">
          <h5>School of C and IT</h5><br />
          <h6 style={{fontSize: "18px", lineHeight: "1.25"}} className="ta_justify">
            auctor augue mauris augue neque gravida in fermentum et sollicitudin ac orci
            phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam 
            nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum consequat nisl 
            vel pretium lectus quam id leo in vitae turpis massa sed elementum tempus egestas 
            sed sed risus pretium quam vulputate dignissim suspendisse in est ante in nibh 
            mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo 
            elit at imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis urna 
            id volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim convallis 
            aenean et tortor.
          </h6><br /><br />
        </div>
        <div className="column large6 medium6 small0">
          <img src={slideImage} alt="altimage" />
        </div>
        <br /><br />
          <div className="column large10 medium10 small12 center">
            <button className="left icon circular" onClick={showslide2}>
              <i className="ms-Icon ms-Icon--Back slideicon"></i>
            </button>
            <button className="right icon circular" onClick={showslide1}>
              <i className="ms-Icon ms-Icon--Forward slideicon"></i>
            </button>
          </div>
          <br /><br />
          <br /><br />
      </div>
    </section>
);
  }
}

export default About;

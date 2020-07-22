import React, { Component } from "react";
import "../css/About.css";
import slideImage from "../images/slideimage.png";

class About extends Component {
  render() {
    return (
      <div>
        <div className="slideshow-container">
          <div className="slide">
            <div className="grid2">
              <div className="slide_image"><img src={slideImage}/></div>
              <div className="slide_content">
                <h1>About Us</h1>
                <p>So how do we get there?<br/> <br/> Reva university consists of many blocks,but three are the most important in them,which are the C.V Raman block,Sir M.Vishweswaraya block and the Swami Vivekananda block,which coincidently seems like the three supreme gods of Hinduism Brahma Vishnu and Mahesh acting upon their important fields.<br/> <br/>Welcome to Reva Hack 2020.</p>
              </div>
            </div>
          </div>
          <div className="slide">
            <div className="grid2 slide2">
              
              <div className="slide_content">
                <h1>About Us</h1>
                <p>So how do we get there?<br/> <br/> Reva university consists of many blocks,but three are the most important in them,which are the C.V Raman block,Sir M.Vishweswaraya block and the Swami Vivekananda block,which coincidently seems like the three supreme gods of Hinduism Brahma Vishnu and Mahesh acting upon their important fields.<br/> <br/>Welcome to Reva Hack 2020.</p>
              </div>
              <div className="slide_image image2"><img src={slideImage}/></div>
            </div>
          </div>
          <div className="slide">
            <div className="grid2">
              <div className="slide_image"><img src={slideImage}/></div>
              <div className="slide_content">
                <h1>About Us</h1>
                <p>So how do we get there?<br/> <br/> Reva university consists of many blocks,but three are the most important in them,which are the C.V Raman block,Sir M.Vishweswaraya block and the Swami Vivekananda block,which coincidently seems like the three supreme gods of Hinduism Brahma Vishnu and Mahesh acting upon their important fields.<br/> <br/>Welcome to Reva Hack 2020.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="dots" style="text-align:center">
        <span className="dot" onClick={currentSlide(1)}></span>
        <span className="dot" onClick={currentSlide(2)}></span>
        <span className="dot" onClick={currentSlide(3)}></span>
      </div>
    </div>

  );
}

export default About;

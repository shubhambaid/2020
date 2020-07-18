import React, { Component } from "react";
import "../css/Footer.css";
import logo_facebook from "../images/logo_facebook.png";
import logo_instagram from "../images/logo_instagram.png";
import logo_twitter from "../images/logo_twitter.png";
import logo_youtube from "../images/logo_youtube.png";

class Footer extends Component {
  render() {
    return (
      
        <footer>
          <div className="container grid2">
            <div>
              <div className="stack_2">
                <div>
                  <a href="#" className="footer_items">
                    Code of conduct
                  </a>
                </div>
                <div>
                  <a href="#" className="footer_items item2">
                    Ask questions
                  </a>
                </div>
              </div>
              <div className="icon_div">
                <a href="#youtube">
                  <img src={logo_youtube} className="icons" />
                </a>
                <a href="#fb">
                  <img src={logo_facebook} className="icons" />
                </a>
                <a href="#twitter">
                  <img src={logo_twitter} className="icons" />
                </a>
                <a href="#insta">
                  <img src={logo_instagram} className="icons" />
                </a>
              </div>
            </div>
            <div className="foot_map">
              <iframe
              title="someRandomKey"
                className="map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15542.89373821591!2d77.6346617!3d13.1166989!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdee225fe28f600f6!2sREVA+University!5e0!3m2!1sen!2sin!4v1522677320198"
              ></iframe>
            </div>
          </div>
          <div id="copyright">
            <p>Copyright REVA UNIVERSITY&copy; 2020</p>
          </div>
        </footer>

    );
  }
}

export default Footer;

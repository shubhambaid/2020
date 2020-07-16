import React, { Component } from "react";
import { render } from "@testing-library/react";
import "../css/Footer.css";
import logo_facebook from "../images/logo_facebook";
import logo_instagram from "../images/logo_instagram";
import logo_twitter from "../images/logo_twitter";
import logo_youtube from "../images/logo_youtube";
class Footer extends Component {
  render() {
    return (
      <div>
        <footer>
          <div class="container grid2">
            <div>
              <div class="stack_2">
                <div>
                  <a href="#" class="footer_items">
                    Code of conduct
                  </a>
                </div>
                <div>
                  <a href="#" class="footer_items item2">
                    Ask questions
                  </a>
                </div>
              </div>
              <div class="icon_div">
                <a href="#youtube">
                  <img src="logo_youtube.png" class="icons" />
                </a>
                <a href="#fb">
                  <img src="logo_facebook.png" class="icons" />
                </a>
                <a href="#twitter">
                  <img src="logo_twitter.png" class="icons" />
                </a>
                <a href="#insta">
                  <img src="logo_instagram.png" class="icons" />
                </a>
              </div>
            </div>
            <div class="foot_map">
              <iframe
                class="map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15542.89373821591!2d77.6346617!3d13.1166989!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdee225fe28f600f6!2sREVA+University!5e0!3m2!1sen!2sin!4v1522677320198"
              ></iframe>
            </div>
          </div>
          <div id="copyright">
            <p>Copyright REVA UNIVERSITY&copy; 2020</p>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
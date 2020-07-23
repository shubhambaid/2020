import React, { Component } from "react";
import "../css/Footer.css";
import logo_facebook from "../images/logo_facebook.png";
import logo_instagram from "../images/logo_instagram.png";
import logo_twitter from "../images/logo_twitter.png";
import logo_youtube from "../images/logo_youtube.png";
import { NavLink } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (

      <footer>
        <div className="column large12 medium12 small12" style={{background: "black"}}>
          <h2 className="ta_center title">The Crew</h2><br />
          <h6 className="ta_center center large8 medium8 small10">There is a Crew which made REVA Hack possible through their sheer hardwork and a will to do something great</h6>
          <br /><br />
          <button className="large primary_blue">
            <NavLink className="butlink">Meet Our Crew</NavLink>
          </button>
          <br /><br /><br /><br /><br /><br />
        </div>
        <div className="column large12 medium12 small12 primary_inverted" style={{width: "100%"}}>
          <div className="column large1 medium1 small0"></div>
          <div className="column large6 medium6 small12"><br /><br />
            <h5>Get In Touch</h5><br />
            <NavLink className="butlink left">Code Of Conduct</NavLink><br /><br />
            <NavLink className="butlink left">Ask Questions</NavLink><br /><br />
            <NavLink className="butlink left">FAQs + Guidelines</NavLink><br /><br /><br /><br />
            <img src={logo_facebook} className="icon left" />
            <img src={logo_instagram} className="icon left leftpadicon" />
            <img src={logo_twitter} className="icon left leftpadicon" />
            <img src={logo_youtube} className="icon left leftpadicon" />
            <br /><br /><br /><br />
          </div>
          <div className="column large5 medium5 small12">
          <br /><br /><br />
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15542.89373821591!2d77.6346617!3d13.1166989!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdee225fe28f600f6!2sREVA+University!5e0!3m2!1sen!2sin!4v1522677320198" style={{border: "none", borderRadius: "10px", height: "276px", width: "100%"}} allowfullscreen="yes"></iframe>
          <br /><br /><br /><br />
          </div>
        </div>
      </footer>


    );
  }
}

export default Footer;

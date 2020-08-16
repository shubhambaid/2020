import React, { Component } from 'react';
import "../Sponsors.css";
import devfolio from "../images/sponsors/devfolio.png";
import matic from "../images/sponsors/matic.png";
import fold from "../images/sponsors/fold.png";

class Sponsors extends Component {
    render() {
        return (
            <div>
            <div className="primary_inverted" style={{padding: "0px 10px"}}>
            <br /><br /><br /><br /><br /><br />
              <h1 className="ta_center title">Sponsors</h1>
              <br /><br />
              <div className="column large8 medium8 small12">
                <h2 className="ta_center">Title</h2>
                <br />
                <img src={devfolio} className="center" style={{width: "40%"}} alt="altimage" />
              </div><br /><br /><br /><br /><br /><br /><br /><br />


              <div className="column large10 medium12 small12">
                <h2 className="ta_center">Gold</h2><br />
                <div className="column large3 medium4 small6">
                    <img src={fold} className="center" style={{width: "90%"}} alt="altimage" />                    
                </div>
                <div className="column large3 medium4 small6">
                    <img src={matic} className="center" style={{width: "90%"}} alt="altimage" />                    
                </div>
              </div><br /><br /><br /><br /><br /><br /><br /><br />


              <div className="column large10 medium12 small12">
                <h2 className="ta_center">Silver</h2><br />
                <div className="column large3 medium3 small3">
                    <img src={fold} className="center" style={{width: "90%"}} alt="altimage" />                    
                </div>
                <div className="column large3 medium3 small3">
                    <img src={matic} className="center" style={{width: "90%"}} alt="altimage" />                    
                </div>
                <div className="column large3 medium3 small3">
                    <img src={matic} className="center" style={{width: "90%"}} alt="altimage" />                    
                </div>
                <div className="column large3 medium3 small3">
                    <img src={fold} className="center" style={{width: "90%"}} alt="altimage" />                    
                </div>
              </div><br /><br /><br /><br />
              
              <br /><br /><br /><br /><br /><br />
            </div>
          </div>
        );
    }
}

export default Sponsors;
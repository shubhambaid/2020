import React, { Component } from 'react';
import "../Sponsors.css";
import devfolio from "../images/sponsors/devfolio.png";
import matic from "../images/sponsors/matic.png";
import fold from "../images/sponsors/fold.png";
import portis from "../images/sponsors/portis_logo.png";
import revaLogo from "../images/sponsors/revaLogo.png";
import taskade from "../images/sponsors/taskade-circle-logo.png";
import bugsee from "../images/sponsors/bugsee.png";


class Sponsors extends Component {
    render() {
        return (
            <div>
            <div className="primary_inverted" style={{padding: "0px 10px"}}>
            <br /><br /><br /><br /><br /><br />
              <h1 className="ta_center title">Sponsors</h1>
              <br /><br />
                <div className="column large10 medium12 small12">
                  <h4 className="ta_center">Tree</h4><br /><br />
                  <div className="column large3 medium4 small6">
                      <a href="https://reva.edu.in/" target="blank"><img src={revaLogo} className="center" style={{width: "100%"}} alt="altimage" /></a>
                  </div>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <div className="column large3 medium4 small6">
                    <a href="https://devfolio.co/" target="blank"><img src={devfolio} className="center" style={{width: "100%"}} alt="altimage" /></a>
                  </div>


              </div><br /><br /><br /><br /><br /><br /><br /><br />

              <div className="column large10 medium12 small12">
                <h4 className="ta_center">Sapling</h4><br />
                <div className="column large2 medium4 small6">
                    <a href="https://fold.money/" target="blank"><img src={fold} className="center" style={{width: "54%"}} alt="altimage" /></a>
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div className="column large2 medium4 small6">
                    <a href="https://matic.network/" target="blank"><img src={matic} className="center" style={{width: "90%"}} alt="altimage" /></a>
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div className="column large2 medium4 small6">
                    <a href="https://portis.io/" target="blank"><img src={portis} className="center" style={{width: "90%"}} alt="altimage" /></a>
                </div>
              </div><br /><br /><br /><br /><br /><br /><br /><br />


              <div className="column large10 medium12 small12">
                <h4 className="ta_center">Shoot</h4><br />
                <div className="column large2 medium4 small6">
                    <a href="https://www.taskade.com/" target="blank"><img src={taskade} className="center" style={{width: "54%"}} alt="altimage" /></a>
                </div>
                <div className="column large2 medium4 small6">
                    <a href="https://www.bugsee.com/" target="blank"><img src={bugsee} className="center" style={{width: "54%"}} alt="altimage" /></a>
                </div>
              </div><br /><br /><br /><br /><br /><br />

            </div>
          </div>
          /*
                <div className="column large10 medium12 small12">
              <h2 className="ta_center">Silver</h2><br />
              <div className="column large3 medium3 small3">
                  <img src={fold} className="center" style={{width: "54%"}} alt="altimage" />
              </div>
              <div className="column large3 medium3 small3">
                  <img src={matic} className="center" style={{width: "90%"}} alt="altimage" />
              </div>
              <div className="column large3 medium3 small3">
                  <img src={matic} className="center" style={{width: "90%"}} alt="altimage" />
              </div>
              <div className="column large3 medium3 small3">
                  <img src={fold} className="center" style={{width: "54%"}} alt="altimage" />
              </div>
            </div><br /><br /><br /><br />

            <br /><br /><br /><br /><br /><br />

                    */
        );
    }
}

export default Sponsors;

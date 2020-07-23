import React, { Component } from 'react';
import "../Sponsors.css";

class Sponsors extends Component {
    render() {
        return (
            <div>
            <div className="primary_inverted">
            <br /><br /><br /><br /><br /><br />
              <h1 className="ta_center title">Sponsors</h1>
              <br /><br /><br /><br />
              <div className="column large8 medium8 small12">
                <h2 className="ta_center">Title</h2>
                
              </div><br /><br /><br /><br />
              <div className="column large8 medium8 small12">
                <h2 className="ta_center">Gold</h2>
              </div><br /><br /><br /><br />
              <div className="column large8 medium8 small12">
                <h2 className="ta_center">Silver</h2>
              </div><br /><br /><br /><br />

              <br /><br /><br /><br /><br /><br />
            </div>
            <br /><br /><br /><br />
          </div>
        );
    }
}

export default Sponsors;
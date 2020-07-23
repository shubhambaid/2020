import React, { Component } from "react";
import "../css/Schedule.css";

class Schedule extends Component {
  render() {
    return (
      <div className="top-top">
        <h1 className="title ta_center">Schedule</h1><br /><br /><br /><br />
        <div id="circle1">
          <div className="ddr">
            <div className="pclass">8:20 Friday</div>
                    Registration Deadline
                  </div>
        </div>
        <hr className="hrv" />
        <div id="circle2">
          <div className="ddl">
            <div className="pclass">9:20 Thursday</div>
                    Confirmation Email
                  </div>
        </div>
        <hr className="hrv" />
        <div id="circle3">
          <div className="ddr">
            <div className="pclass">8:20 Friday</div>
                    Opening Ceremony
                  </div>
        </div>
        <hr className="hrv" />
        <div id="circle4">
          <div className="ddl">
            <div className="pclass">9:28 Saturday</div>
                    Webinars/Workshop
                  </div>
        </div>
        <hr className="hrv" />
        <div id="circle5">
          <div className="ddr">
            <div className="pclass">9:29 Sunday</div>
                    Hackathon Starts
                  </div>
        </div>
        <hr className="hrv" />
        <div id="circle6">
          <div className="ddl">
            <br />
            <div className="pclass">9:30 Monday</div>
                      Presentation and Judging <br />
                      Closing
                  </div>
        </div>
        <br /><br />
        <br /><br />
        <br /><br />
      </div>
    );
  }
}

export default Schedule;
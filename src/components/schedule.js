import React, {Component} from "react";
import "../Schedule.css";

class Footer extends Component{
    render(){
        return(
              <div className="top-top">
                <div>
                <p className="hed">Schedule</p>
                </div>
                <div id="circle1">
                  <div className="ddr">
                    <p>8:20 Friday</p>
                    Registration Deadline
                  </div>
                </div>
                <hr className="hrv"/>
                <div id="circle2">
                  <div className="ddl">
                    <p>9:20 Thursday</p>
                    Confirmation Email
                  </div>
                </div>
                <hr className="hrv" />
                <div id="circle3">
                  <div className="ddr">
                    <p>8:20 Friday</p>
                    Opening Ceremony
                  </div>
                </div>
                <hr className="hrv" />
                <div id="circle4">
                  <div className="ddl">
                    <p>9:28 Saturday</p>
                    Webinars/Workshop
                  </div>
                </div>
                <hr className="hrv" />
                  <div id="circle5">
                  <div className="ddr">
                    <p>9:29 Sunday</p>
                    Hackathon Starts
                  </div>
                </div>
                <hr className="hrv" />
                <div id="circle6">
                  <div className="ddl">
                  <br/>
                    <p>9:30 Monday</p>
                      Presentation and Judging <br/>
                      Closing
                  </div>
                </div>
                <br/><br/>
                <br/><br/>
                <br/><br/>
              </div>
        );
    }
}

export default Footer;

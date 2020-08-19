import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import "../css/FAQ.css";

class FAQ extends Component {
  render() {
    return (<div className="top">
      <div className="FAQ">
        Frequently Asked Questions
      </div>
      <br/>
      <br/>
      <section>
          <div className="collapsible">
            <button className="collapsible_button">
             	When and where will it be hosted?
            </button>
            <p>
              It is hosted online on Devfolio platform on November.
                       </p>
          </div>
          <div className="collapsible">
            <button className="collapsible_button">
              How much will it cost me?
            </button>
            <p>
              It’s absolutely free!!!  Will cost you nothing but your interest and time!!!
            </p>
          </div>

          <div className="collapsible">
            <button className="collapsible_button">
            	What are the requirements to be able to participate?
            </button>
            <p>
              Anyone who is interested can participate. There is no restriction!
              If you are new to programming its alright, in this platform you will get to learn a lot!
              </p>
          </div>

          <div className="collapsible">
            <button className="collapsible_button">
              	How do we submit our projects?
            </button>
            <p>
              Details about the project will be entered on Devfolio dashboard and
               github will be used to submit the code, also commits will be monitored.             </p>
          </div>

          <div className="collapsible">
            <button className="collapsible_button">
	           What is the theme?
            </button>
            <p>
            It is an Open theme, but there will be tracks which u can use
            if you want to and also stand a chance to win extra prize!!!            </p>
          </div>

          <div className="collapsible">
            <button className="collapsible_button">
              Can I apply if I don’t have a team?
            </button>
            <p>
              Yes, you can apply if you don’t have team, you can form a team.            </p>
          </div>

          <div className="collapsible">
            <button className="collapsible_button">
              When is the last date for registration?
            </button>
            <p>
              October 28th is the last date for registration.
            </p>
          </div>

          <div className="collapsible">
            <button className="collapsible_button">
              Can I start working on my project before the event?
            </button>
            <p>
              Yes, you can work on the project before the event, but can submit only once the event starts.            </p>
          </div>
          <div className="collapsible">
            <button className="collapsible_button">
            	What is the maximum number of members in a team?
            </button>
            <p>
              Max. 4
            </p>
          </div>

          <div className="collapsible">
            <button className="collapsible_button">
              I didn’t find my question here, where can I clarify it?
            </button>
            <p>
              You can contact our Query Team through the following discord link.
            </p>
          </div>

      </section>
      <div className="bot">
        We will following the Hack Code of Conduct,which can be found
        <NavLink to="#"> here</NavLink>
        <br/>
        <br/>
        <br/>
      </div>
      <div className="bot1">
        <a href="https://discord.gg/thubgqk" className="but">ASK MORE QUESTIONS</a>
        <br/><br/><br/>
      </div>
    </div>);
  }
}

export default FAQ;

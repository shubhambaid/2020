import React, { Component } from "react";
import {NavLink} from "react-router-dom";

class FAQ extends Component {
  render() {
    return (
      <div className="top">
      <div className="FAQ">
      FAQ
    </div>
    <br/>
    <br/>
    <section>
      <div className="container">
        <div className="accordion">
          <div className="accordion-item" id="question1">
            <NavLink className="accordion-link" to="#question1">
              When and where will it be hosted?
              <ion-icon className="up" name="chevron-up-outline"></ion-icon>
              <ion-icon className="down" name="chevron-down-outline"></ion-icon>
            </NavLink>
            <div className="answer">
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Condimentum lacinia quis vel eros donec ac odio tempor orci.
              Duis ultricies lacus sed turpis tincidunt id.
              </p>

            </div>

          </div>
          <div className="accordion-item" id="question2">
            <NavLink className="accordion-link" to="#question2">
              How much will it cost me?
              <ion-icon className="up" name="chevron-up-outline"></ion-icon>
              <ion-icon className="down" name="chevron-down-outline"></ion-icon>
            </NavLink>
            <div className="answer">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Condimentum lacinia quis vel eros donec ac odio tempor orci.
                Duis ultricies lacus sed turpis tincidunt id.
              </p>
            </div>

          </div>
          <div className="accordion-item" id="question3">
            <NavLink className="accordion-link" to="#question3">
              What are the requirements to be able to participate?
              <ion-icon className="up" name="chevron-up-outline"></ion-icon>
              <ion-icon className="down" name="chevron-down-outline"></ion-icon>
            </NavLink>
            <div className="answer">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Condimentum lacinia quis vel eros donec ac odio tempor orci.
                Duis ultricies lacus sed turpis tincidunt id.
              </p>
            </div>

          </div>
          <div className="accordion-item" id="question4">
            <NavLink className="accordion-link" to="#question4">
              How do we submit our projects?
              <ion-icon className="up" name="chevron-up-outline"></ion-icon>
              <ion-icon className="down" name="chevron-down-outline"></ion-icon>
            </NavLink>
            <div className="answer">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Condimentum lacinia quis vel eros donec ac odio tempor orci.
                Duis ultricies lacus sed turpis tincidunt id.
              </p>
            </div>

          </div>
          <div className="accordion-item" id="question5">
            <NavLink className="accordion-link" to="#question5">
              Are there any rules to be followed?
              <ion-icon className="up" name="chevron-up-outline"></ion-icon>
              <ion-icon className="down" name="chevron-down-outline"></ion-icon>
            </NavLink>
            <div className="answer">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Condimentum lacinia quis vel eros donec ac odio tempor orci.
                Duis ultricies lacus sed turpis tincidunt id.
              </p>
            </div>

          </div>
          <div className="accordion-item" id="question6">
            <NavLink className="accordion-link" to="#question6">
              What is the theme?
              <ion-icon className="up" name="chevron-up-outline"></ion-icon>
              <ion-icon className="down" name="chevron-down-outline"></ion-icon>
            </NavLink>
            <div className="answer">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Condimentum lacinia quis vel eros donec ac odio tempor orci.
                Duis ultricies lacus sed turpis tincidunt id.
              </p>
            </div>

          </div>
          <div className="accordion-item" id="question7">
            <NavLink className="accordion-link" to="#question7">
              Can I apply if I don’t have a team?
              <ion-icon className="up" name="chevron-up-outline"></ion-icon>
              <ion-icon className="down" name="chevron-down-outline"></ion-icon>
            </NavLink>
            <div className="answer">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Condimentum lacinia quis vel eros donec ac odio tempor orci.
                Duis ultricies lacus sed turpis tincidunt id.
              </p>
            </div>

          </div>
          <div className="accordion-item" id="question8">
            <NavLink className="accordion-link" to="#question8">
              When is the last date for registration?
              <ion-icon className="up" name="chevron-up-outline"></ion-icon>
              <ion-icon className="down" name="chevron-down-outline"></ion-icon>
            </NavLink>
            <div className="answer">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Condimentum lacinia quis vel eros donec ac odio tempor orci.
                Duis ultricies lacus sed turpis tincidunt id.
              </p>
            </div>

          </div>
          <div className="accordion-item" id="question9">
            <NavLink className="accordion-link" to="#question9">
              Can I start working on my project before the event?
              <ion-icon className="up" name="chevron-up-outline"></ion-icon>
              <ion-icon className="down" name="chevron-down-outline"></ion-icon>
            </NavLink>
            <div className="answer">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Condimentum lacinia quis vel eros donec ac odio tempor orci.
                Duis ultricies lacus sed turpis tincidunt id.
              </p>
            </div>

          </div>
          <div className="accordion-item" id="question10">
            <NavLink className="accordion-link" to="#question10">
               I didn’t find my question here, where can I clarify it?
              <ion-icon className="up" name="chevron-up-outline"></ion-icon>
              <ion-icon className="down" name="chevron-down-outline"></ion-icon>
            </NavLink>
            <div className="answer">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Condimentum lacinia quis vel eros donec ac odio tempor orci.
                Duis ultricies lacus sed turpis tincidunt id.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
    <div className="bot">
      We will following the Hack Code of Conduct,which can be found <NavLink to="#">here</NavLink>
      <br/>
      <br/>
      <br/>
    </div>
    <div className="bot1">
      <NavLink to="#" className="but">ASK MORE QUESTIONS</NavLink>
      <br/><br/><br/>
    </div>
      </div>
    );
  }
}

export default FAQ;

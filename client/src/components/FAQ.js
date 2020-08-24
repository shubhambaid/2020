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
             	When and where will REVA HACK &lt;&#47;&gt; 2020 be hosted?
            </button>
            <p>
              REVA HACK &lt;&#47;&gt; 2020 is a national level hackathon which will be hosted online on Devfolio from
              2nd November 2020 to 7th November 2020
                       </p>
          </div>
          <div className="collapsible">
            <button className="collapsible_button">
              How much will it cost to participate in REVA HACK &lt;&#47;&gt; 2020?
            </button>
            <p>
              It is free. Participating in REVA HACK &lt;&#47;&gt; 2020 Will cost you nothing but your interest and time.
            </p>
          </div>

          <div className="collapsible">
            <button className="collapsible_button">
            	What are the requirements to be able to participate?
            </button>
            <p>
            There are no specific requirements for participation. Anyone who is interested can participate in REVA HACK &lt;&#47;&gt; 2020. You just need a Devfolio account to register and a GitHub repository so our team can monitor your progress. Also, you need to agree with our privacy policy.
              </p>
          </div>

          <div className="collapsible">
            <button className="collapsible_button">
              	How do we submit our projects?
            </button>
            <p>
              There are no specific requirements for participation. Anyone who is interested can participate in REVA HACK &lt;&#47;&gt; 2020. You just need a Devfolio account to register and a GitHub repository so our team can monitor your progress. Also, you need to agree with our privacy policy.             </p>
          </div>

          <div className="collapsible">
            <button className="collapsible_button">
	           What is the theme?
            </button>
            <p>
            It is an open themed hackathon. However, we will have a few tracks to push you in a direction if you and your team can not come up with an idea.            </p>
          </div>

          <div className="collapsible">
            <button className="collapsible_button">
              Can I apply if I don’t have a team?
            </button>
            <p>
              Yes, you can apply if you do not have team, you can form a team with other individual participants if you want or else you can participate as an individual too.            </p>
          </div>

          <div className="collapsible">
            <button className="collapsible_button">
              When is the last date for registration?
            </button>
            <p>
              1st November 2020 is the last date for registration.
            </p>
          </div>

          <div className="collapsible">
            <button className="collapsible_button">
              Can I start working on my project before the event?
            </button>
            <p>
              No, you cannot work on your project before the start of the Hackathon. Your GitHub commits will be actively monitored and will be checked for plagiarism/duplicates.            </p>
          </div>
          <div className="collapsible">
            <button className="collapsible_button">
            	What is the maximum number of members in a team?
            </button>
            <p>
              Maximum number of members per team to participate is limited to 4.
            </p>
          </div>

          <div className="collapsible">
            <button className="collapsible_button">
              I didn’t find my question here, where can I clarify it?
            </button>
            <p>
              You can contact our Query Team through the following discord link <a href="https://discord.gg/7Vxyx35">here</a>
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

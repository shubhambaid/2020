import React from "react";
import comingSoon from "../images/coming-soon.png";
import "../css/Speakers.css";

function Speakers() {
  return (
    <div className="speakers">
      <h1>Speakers</h1>
      <div>
        {/* <Card source={developers} name="Developers" />
        <Card source={design} name="Design" />
        <Card source={curation} name="Curation" />
        <Card source={query} name="Query Management" />
        <Card source={organizer} name="Organizers" />
        <Card source={sponsor} name="sponsors" /> */}
        <img src={comingSoon} alt="coming-soon" />
      </div>
      {/* <button className="primary_blue small">CALL FOR SPEAKERS</button> */}
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default Speakers;

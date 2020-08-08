import React from "react";
import comingSoon from "../images/coming-soon.png"



function Speakers() {
  return (
    <div className="teams">
      <h1>Speakers</h1>
      <div>
        {/* <Card source={developers} name="Developers" />
        <Card source={design} name="Design" />
        <Card source={curation} name="Curation" />
        <Card source={query} name="Query Management" />
        <Card source={organizer} name="Organizers" />
        <Card source={sponsor} name="sponsors" /> */}
        <img src={comingSoon} alt="coming-soon" style={{width:"50%"}} />
      </div>
      {/* <button className="primary_blue small">CALL FOR SPEAKERS</button> */}
      <br /><br /><br /><br />
    </div>
  );
}

export default Speakers;

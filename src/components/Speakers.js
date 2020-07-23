import React from "react";
import Card from "./Card";
import developers from "../images/developers.png";
import design from "../images/design.png";
import curation from "../images/curation.png";
import query from "../images/query-management.png";
import sponsor from "../images/sponsors.png";
import organizer from "../images/organizers.png";

function Speakers() {
  return (
    <div className="teams">
      <h1>Speaker</h1>
      <div>
        <Card source={developers} name="Developers" />
        <Card source={design} name="Design" />
        <Card source={curation} name="Curation" />
        <Card source={query} name="Query Management" />
        <Card source={organizer} name="Organizers" />
        <Card source={sponsor} name="sponsors" />
      </div>
      <button className="speaker-btn">CALL FOR SPEAKERS</button>
    </div>
  );
}

export default Speakers;

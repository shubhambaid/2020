import React from "react";
import "../css/Teams.css";
import developers from "../images/developers.png";
import design from "../images/design.png";
import curation from "../images/curation.png";
import query from "../images/query-management.png";
import sponsor from "../images/sponsors.png";
import organizer from "../images/organizers.png";
import Card from "./Card";

function Team() {
  return (
    <div className="teams">
      <h1>Crew</h1>
      <div>
        <Card source={developers} name="Developers" />
        <Card source={design} name="Design" />
        <Card source={curation} name="Curation" />
        <Card source={query} name="Query Management" />
        <Card source={organizer} name="Organizers" />
        <Card source={sponsor} name="sponsors" />
      </div>
    </div>
  );
}

export default Team;

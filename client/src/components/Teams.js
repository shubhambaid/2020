import React from "react";
import "../css/Teams.css";
import developers from "../images/developers.png";
import design from "../images/design.png";
import curation from "../images/curation.png";
import query from "../images/query-management.png";
import sponsor from "../images/sponsors.png";
import organizer from "../images/organizers.png";
import Card from "./Card";

function Teams() {
  return (
    <div className="teams">
      <h1>The Crew</h1>
      <div>
        <Card source={organizer} name="Organizing Crew" />
        <Card source={sponsor} name="Sponsorship Crew" />
        <Card source={curation} name="Curation Crew" />
        <Card source={design} name="Design Crew" />
        <Card source={developers} name="Development Crew" />
        <Card source={query} name="Query Management Crew" />
      </div>
      <br /><br /><br /><br />
    </div>
  );
}

export default Teams;

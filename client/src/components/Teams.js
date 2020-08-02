import React from "react";
import "../css/Teams.css";
import developers from "../images/developers.png";
import design from "../images/design.png";
import curation from "../images/curation.png";
import query from "../images/query-management.png";
import sponsor from "../images/sponsors.png";
import organizer from "../images/organizers.png";
import Card from "./TeamCard";

function Teams() {
  return (
    <div className="teams">
      <h1>The Crew</h1>
      <div>
        <Card
          source={organizer}
          name="Organizing Crew"
          members={["Shivendra Saurav", "Sahil Chachra", "Shubham Baid"]}
          content="Codes are clumsy sometimes but the management should never be and to ensure this we have an amazing team of people who are the main stars behind the show! The extremely magnificent organization team knows how to handle it all. We handle it all so that the only thing that you now need to clean is your code. Code hassle-free and we'll manage it all."
        />

        <Card
          source={curation}
          name="Curation Crew"
          members={[
            "Chirag Vijay",
            "Venkatakarthik",
            "Divyanshi Pathak",
            "Pranay Dey",
            "Spandana HM",
          ]}
          content="All that glitters is always not gold, sometimes it's just a combination of words! Who proves it better than the Curation team? Our extremely hard-working Curation team knows what all goes into the grind behind every line of code and so to put it all together we find just the perfect words for every occasion. We try to ease your journey with us and thus we take you through the simplest path. So, now the only thing that confuses you is the time-stamp and not the content."
        />

        <Card
          source={developers}
          name="Development Crew"
          members={[
            "Dharshan K",
            "Avadhesh Singh",
            "Deep Vashisth",
            "Anjan Kumar",
          ]}
          content="A stone un-touched always remains a stone un-turned and our
              superficial development team knows exactly how to do it!
              Perfection takes time and patience and so does the development.
              For every length of code, there is a hidden trail of hard-work.
              So, we do the bit from our end to ease your experience with us."
        />

        <Card
          source={design}
          name="Design Crew"
          members={[
            "Aman Srivastava",
            "Amareshwar Karatagi",
            "Ishita Agrawal",
            "Prajwal U",
            "Shradha B Kaba",
          ]}
          content="Love at first sight, ever heard of it?
          Well, that's what our extremely talented design team aims for! You love it as soon as you see it and thus, you go for it with all your heart and soul.
          We reach the heart, we please the soul
          No matter how hard it looks, our designers know how to rock n roll!"
        />

        <Card
          source={sponsor}
          name="Sponsorship Crew"
          members={["Niran N"]}
          content="Why invest when you can optimize , just like our  sponsors did! We are extremely thankful for all the amazing sponsors who made this dream come true! For all that we plan as a family, they nourished it as the roots. Amazing team leads to amazing results and this Hackathon is going to be none less than that."
        />

        <Card
          source={query}
          name="Query Management Crew"
          members={[
            "Deeksha Kottary",
            "Bhumika Raj",
            "Dheeraj R",
            "Hasitha Chennubhotla",
            "Rujul Jadav",
          ]}
          content="For all your doubts, we have the precise solution!
          Our extremely efficient query management team ensures that no doubt remains unanswered.
          A satisfied participant is always a way closer to the grand win and we take care and responsibility of taking you as closer to it as we can!"
        />
      </div>
    </div>
  );
}

export default Teams;

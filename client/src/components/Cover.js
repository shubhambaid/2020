import React, { useState, useEffect } from "react";
import "../css/Cover.css";
import discord from "../images/discord.svg";
import DSC from "../images/sponsors/DSC.png";

function Cover(props) {
  // const [mode, setMode] = useState("dark");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.outerWidth <= 768) setIsMobile(true);
  }, [isMobile]);

  function awd (){
    window.open("https://devfolio.co/REVAhack/dashboard");
  }

  return (
    <div className="cover">
      <div style={{ position: "relative", top: "38%", left: "-2%" }}>
        <h1>
          REVA HACK &#60;&#47;&#62;<sup>20</sup>
          <sub>20</sub>
        </h1>
        <br />
        <hr />
        <br />
        <h4>Code for a Change</h4>
        <p>04-07 November</p>
        <br />
        <br />

        <img src={DSC} className="associate" alt="DSC" />
        
        <button id="devfolio-apply-now" className="devfolio-btn" onClick={awd}>
          <svg
            className="logo"
            xmlns="http://www.w3.org/2000/svg"
            fill="#fff"
            viewBox="0 0 115.46 123.46"
            style={{ height: "24px", width: "24px", marginRight: "8px" }}
          >
            <path d="M115.46 68a55.43 55.43 0 0 1-50.85 55.11S28.12 124 16 123a12.6 12.6 0 0 1-10.09-7.5 15.85 15.85 0 0 0 5.36 1.5c4 .34 10.72.51 20.13.51 13.82 0 28.84-.38 29-.38h.26a60.14 60.14 0 0 0 54.72-52.47c.05 1.05.08 2.18.08 3.34z" />
            <path d="M110.93 55.87A55.43 55.43 0 0 1 60.08 111s-36.48.92-48.58-.12C5 110.29.15 104.22 0 97.52l.2-83.84C.38 7 5.26.94 11.76.41c12.11-1 48.59.12 48.59.12a55.41 55.41 0 0 1 50.58 55.34z" />
          </svg>
          Apply with Devfolio
        </button>
        <a href="https://discord.gg/xBBJgXp" target="blank" className="discord">
          <span>Join Us On</span>

          <img src={discord} alt="discord" />
        </a>
      </div>
    </div>
  );
}

export default Cover;

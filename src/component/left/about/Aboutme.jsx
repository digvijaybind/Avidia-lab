import React from "react";
import "./About.css";
import  Profiledata  from "../../../profile.json";

const Aboutme = () => {
  return (
    <div className="Containerabout">
      <div className="Abouttitle">ABOUT ME</div>

      <div className="descriaption">{Profiledata[0].aboutMe}</div>
    </div>
  );
};

export default Aboutme;

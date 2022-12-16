import React from "react";
import "./Language.css";
import Profiledata from "../../../profile.json";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

const needDominantBaselineFix = true;
const Language = () => {
  return (
    <div className="conatinerLangugage">
      <div className="languagetitle">Language</div>
      <div className="languagedescibe">
        {Profiledata.map((data, index) => {
          return <div className="title">{data.languages.title}</div>;
        })}
      </div>

      <div className="chartdonut" style={{ height: "130px" }}>
        {Profiledata.map((data, index) => {
          return data.languages.langArray.map((langdata, index) => {
            return (
              <CircularProgressbar
                key={index}
                value={langdata.fluecny}
                text={
                  <tspan dy={needDominantBaselineFix ? 6 : 0} dx={"-25"}>
                    {langdata.name}
                  </tspan>
                }
                styles={buildStyles({
                  // Rotation of path and trail, in number of turns (0-1)
                  rotation: 0.25,

                  // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                  strokeLinecap: "butt",

                  // Text size
                  textSize: "15px",

                  // How long animation takes to go from one percentage to another, in seconds
                  pathTransitionDuration: 0.5,

                  // Can specify path transition in more detail, or remove it entirely
                  // pathTransition: 'none',

                  // Colors
                  pathColor: `rgba(128,128,128 , ${langdata.fluecny / 100})`,
                  textColor: "#000000",

                  trailColor: "#d6d6d6",
                  backgroundColor: "#3e98c7",
                })}
              />
            );
          });
        })}
      </div>
    </div>
  );
};

export default Language;

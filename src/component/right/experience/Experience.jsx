import React from "react";
import "./Experience.css";
import Profiledata from "../../../profile.json";
import Experiencesector from "./Experiencesector";
const Experience = () => {
  return (
    <div>
      <div className="Experiencetitle">Experience</div>

      <div className="Containerexperience">
        {Profiledata.map((data, index) => {
          return data.experiences.map((experiencedata, index) => {
            return (
              <Experiencesector
                key={index}
                title={experiencedata.title}
                description={experiencedata.description}
                year={experiencedata.year}
              />
            );
          });
        })}
      </div>
    </div>
  );
};

export default Experience;

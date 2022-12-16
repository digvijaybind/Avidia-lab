import React from "react";
import "./Education.css";
import Educatiosection from "./Educatiosection";
import Profiledata from "../../../profile.json";
const Education = () => {
  return (
    <div className="containerEducation">
      <div className="Educationtitle">Education</div>
      {Profiledata.map((data, index) => {
        console.log("dataeducation", data);

        return data.education.map((education, index) => {
          console.log("education", education);
          return (
            <Educatiosection
              key={index}
              school={education.school}
              degree={education.degree}
              year={education.year}
            />
          );
        });
      })}
    </div>
  );
};

export default Education;

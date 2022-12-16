import React from "react";

const Experiencesector = ({ title, description, year }) => {
  return (
    <div>
      <div className="Containereducation">
        <div className="schoolandegree">
          <div className="educationschool">{title}</div>
          <div className="educationdegree">{description}</div>
        </div>
        <div className="educationyear">{year}</div>
      </div>
    </div>
  );
};

export default Experiencesector;

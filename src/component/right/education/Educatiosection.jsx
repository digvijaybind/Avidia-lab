import React from "react";

const Educatiosection = ({ school, degree, year }) => {
  console.log("data", school, degree, year);
  return (
    <div className="Containereducation">
      <div className="schoolandegree">
        <div className="educationschool">{degree}</div>
        <div className="educationdegree">{school}</div>
      </div>
      <div className="educationyear">{year}</div>
    </div>
  );
};

export default Educatiosection;

import React from "react";
import "./Skill.css";

const Skill = ({ title, percentage }) => {
  console.log("title", title, percentage);
  const containerStyles = {
    height: 20,
    width: "100%",
    backgroundColor: "#e0e0de",
    borderRadius: 50,

    display: "flex",
    justifyContent: "self-start",
  };

  const fillerStyles = {
    height: "100%",
    width: `${percentage}%`,
    backgroundColor: "#5A5A5A",
    borderRadius: "inherit",
    textAlign: "right",
  };

  const labelStyles = {
    padding: 5,
    color: "white",
    fontWeight: "bold",
  };
  return (
    // <div className="containerStyles">
    //   <div className="fillerStyles">
    //     <span className="labelStyles">10%</span>
    //   </div>
    // </div>
    <div className="Containerskill">
      <h2 className="Title">{title}</h2>
      <div style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}></span>
        </div>
      </div>
    </div>
  );
};

export default Skill;

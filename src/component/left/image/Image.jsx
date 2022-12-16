import React from "react";
import "./Image.css";
import Profileimage from "../../../asset/image/Profile.jpg";
import Profiledata from "../../../profile.json";
const Image = () => {
  return (
    <div className="Containerimage">
      <div className="Nameimage">
        <img src={Profileimage} className="Profileimage" alt="xyz" />
      </div>
      <div className="Name">
        {Profiledata.map((data, index) => {
          return (
            <div key={index}>
              <div className="ProfileName">{data.fullName}</div>
              <div className="Destination">{data.role}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Image;

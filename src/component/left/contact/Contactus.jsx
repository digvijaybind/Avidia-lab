import React from "react";
import "./Contactus.css";
const Contactus = ({ email, mobile }) => {
  return (
    <div className="containerContact">
      <div className="Contactitle">CONTACTS</div>
      <div className="contactdescribe">
        {email}
        <br />
        {mobile}
      </div>
    </div>
  );
};

export default Contactus;

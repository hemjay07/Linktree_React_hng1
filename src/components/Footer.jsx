import React from "react";
import I4Glogo from "../assets/I4G.png";
import ZuriInternshipLogo from "../assets/Zuri.Internship_Logo.png";

function Footer() {
  return (
    <div className="footer">
      <img src={ZuriInternshipLogo} alt=" Zuri intership logo" />
      <h4 className="hng9">HNG Internship 9 Frontend Task</h4>
      <img src={I4Glogo} alt="i4g logo" />
    </div>
  );
}

export default Footer;

import React from "react";
import socialMedia from "../components/img/socialMedia.png";
import schoolLogo from "../components/img/ABC SCHOOL LOGO.png";
function homeNavbar() {
  return (
    <div className="navbar">
      <div className="navbarP1">
        <div className="greenBar">
          <button>Board Result</button>
          <button>Admission</button>
          <span>Like/Folow us on Social media</span>
          <img src={socialMedia} alt="Social Icon" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
        <div className="blackBar">
          <span>Online Payment</span>
          <span>About us</span>
        </div>
      </div>

      <div className="navbarP2">
        <div className="logo">
          <img src={schoolLogo} alt="" />
          <div className="navbarinfo">
            <ul id="borderLeft"> HOME </ul>
            <ul id="borderLeft"> INTRODUCTION</ul>
            <ul id="borderLeft"> ACADEMIC </ul>
            <ul id="borderLeft"> RULES & REGULATION </ul>
            <ul id="borderLeft"> INFRASTRUCTURE </ul>
            <ul id="borderLeft"> FEE </ul>
            <ul className="extraList">STUDENT COUNCIL</ul>
            <button>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default homeNavbar;

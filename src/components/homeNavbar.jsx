import React from "react";
import socialMedia from "../components/img/socialMedia.png";
import schoolLogo from "../components/img/ABC SCHOOL LOGO.png";
import {useNavigate,Link} from "react-router-dom"

import about from "../pages/about";
function HomeNavbar() {
  const navigate=useNavigate();

  const navigateToAuth = () => {
    // 👇️ navigate to /contacts
    navigate('/auth');
  };
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
         
         <Link to="/aboutUs">

          <span >About us</span>
         </Link>
         <button onClick={navigateToAuth}>Login</button>
        </div>
      </div>

      <div className="navbarP2">
        <div className="logo">
          <img src={schoolLogo} alt="" />
          <div className="navbarinfo">
            <Link to="/" style={{textDecoration: 'none',color:'black'}}>

            <ul id="borderLeft"> HOME </ul>
            </Link>
            <ul id="borderLeft"> INTRODUCTION</ul>
            <ul id="borderLeft"> ACADEMIC </ul>
            <ul id="borderLeft"> RULES & REGULATION </ul>
            <Link to="/infra" style={{textDecoration: 'none',color:'black'}}>

            <ul id="borderLeft"> INFRASTRUCTURE </ul>
            </Link >
            <ul id="borderLeft"> FEE </ul>
            <ul className="extraList">STUDENT COUNCIL</ul>
            {/* <button onClick={navigateToAuth}>Login</button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeNavbar;

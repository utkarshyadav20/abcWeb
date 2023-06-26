import React from "react";
import socialMedia from "../components/img/socialMedia.png"
function homeNavbar() {
  return (  
    <div className="navbar">



      <div className="navbarP1">
        <div className="greenBar">
          <button>Board Result</button>
          <button>Admission</button>
          <span>Like/Folow us on Social media</span>
          <img
            src={socialMedia}
            alt="Social Icon"
          />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
        <div className="blackBar">
          <span>Online Payment</span>
          <span>About us</span>
        </div>
      </div>











      <div className="navbarP2"></div>
    </div>
  );
}

export default homeNavbar;

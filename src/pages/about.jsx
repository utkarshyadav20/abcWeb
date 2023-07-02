import React from "react";
import HomeNavbar from "../components/HomeNavbar";
import SchoolLogo from "../components/img/ABC SCHOOL LOGO.png";
// import {useNavigate} from "react-router-dom"
// import { BrowserRouter,Routes,Route } from "react-router-dom";

function about() {
  return (
    
        
      <div className="aboutMainSection">
          <HomeNavbar></HomeNavbar>
      <div className="aboutAllSection">
        <div className="aboutSection">
          <div className="aboutFilter">
            <div className="aboutBorder">
              <h1>About</h1>
            </div>
          </div>
        </div>
        <div className="aboutContant">
          <div className="aboutHeading">
            <div className="schoolLogo">
              <img src={SchoolLogo} alt="" />
            </div>
            <h1>
              <div className="aboutBorder"></div>Overview & Our Identity{" "}
              <div className="aboutBorder"></div>
            </h1>
          </div>
          <div className="aboutParagraph">
            <p>
              ABC Public School is a renowned educational institution known for
              its commitment to providing quality education to students. Located
              in a convenient and accessible area, the school has been serving
              the community for several years and has established a strong
              reputation for academic excellence. The school offers education
              from preschool to high school, catering to students of various age
              groups. The curriculum at ABC Public School is designed to provide
              a well-rounded education that encompasses both academic and
              co-curricular activities. The emphasis is on holistic development,
              ensuring that students receive a comprehensive education that
              nurtures their intellectual, physical, emotional, and social
              growth. Academically, ABC Public School maintains high standards
              of education, focusing on a diverse range of subjects including
              languages, mathematics, sciences, humanities, and more. The school
              follows a well-structured and up-to-date curriculum that is in
              line with the national educational standards. The faculty consists
              of experienced and dedicated teachers who strive to create a
              stimulating learning environment, encouraging critical thinking,
              creativity, and independent learning. Beyond academics, ABC Public
              School offers a wide array of co-curricular activities and sports
              programs. Students have the opportunity to engage in various
              extracurricular pursuits such as music, dance, drama, art, and
              sports. These activities help foster creativity, teamwork, and
              leadership skills, allowing students to explore their talents and
              interests outside the traditional classroom setting.
            </p>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default about;
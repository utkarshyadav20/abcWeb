import React from "react";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="footerBgColor">
      <div className="topPannelFooter">
        <div className="footerTextSection">
          <div className="introduction">
            <h1>INTRODUCTION</h1>
          </div>
          <div className="introductionList">
            <ul>
              <Link
                to="/aboutUs"
                style={{ textDecoration: "none", color: "black" }}
              >
                <li>About Us</li>
              </Link>
              <li>Vision and Mission</li>
              <li>Chairman Message</li>
              <li>Curriculum</li>
              <li>Examination Policy</li>
              <li>Assessment Schedule</li>
            </ul>
          </div>
        </div>
        <div className="footerContactSectionMain">
          <div className="footerContactSection">
            <div className="contact">
              <h3>CONTACT US</h3>
              <h4>ABC Public School</h4>
              <p>Near VR Mall, Tripathi Ji Marg, Lucknow-274502 U.P.India</p>
            </div>
            <div className="contactDetails">
              <h5>Phone no.</h5>
              <a Phone no href="callto:+917870162890">
                Phone Call
              </a>
              <h5>SMS</h5>
              <a href="SMS:+917455006503">Send SMS</a>
              <h5>Email</h5>
              <a href="mailto:feedback@abcpublicschool.org">
                feedback@abcpublicschool.org
              </a>
              <h5>Social Media</h5>

              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-linkedin"></i>
            </div>
          </div>
          <div className="footerMapSection">
            {/* <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d65652.06191353113!2d77.66989431155599!3d28.969918528309535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c6452ea119981%3A0x7242561d9c89f73!2sMilitary%20Hospital!5e0!3m2!1sen!2sin!4v1688189034526!5m2!1sen!2sin"
              width="900"
              height="900"
              // style={mapStyle}
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              allowfullscreen
            ></iframe> */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16659.76722111825!2d80.97465824229022!3d26.845880597873137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd2d2e2f1a81%3A0xffd00a64f04bdd0d!2sCity%20Montessori%20School!5e0!3m2!1sen!2sin!4v1688661997776!5m2!1sen!2sin"
              width="900"
              height="900"
              // style="border:0;"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
      <div className="copyrightText">
        <div>
          <h4>
            All Right Reserved, Copyright @ 2023 Website is maintained by [Vinay
            Nath Tiwary & Utkrash Yadav]
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Footer;

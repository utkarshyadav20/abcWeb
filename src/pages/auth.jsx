import React from "react";
import HomeNavbar from "../components/homeNavbar";
import schoolLogo from "../components/img/ABC SCHOOL LOGO.png";

function auth() {
  return (
    <div className="authBg">
      <div className="authBgFilter">
        <div className="loginPage">
          <img src={schoolLogo} alt="schoolLogo" />
          <h1>Login</h1>
          <div className="inputBox">
            <p>Username</p>
            <input type="username" placeholder="Enter Username" />
            <p>Password</p>
            <input type="password" placeholder="Enter Password" />
            <h5>forgot password?</h5>
            <div>
              <button>Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default auth;

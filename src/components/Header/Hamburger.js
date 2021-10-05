import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo-93d12d8cff484ab736d2a39f15bf66d8.svg";
import "./header.css";

const Hamburger = () => {
  return (
    <>
      <div className="hamburgerContainer">
        <div className="hamburgerWrap">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
        <p className="hamburgerLogo">
          ALL
          <br />
          SPORTS
        </p>
        <Link to="/">
          <div className="imgWrap">
            <img src={logo} alt="" />
          </div>
        </Link>
      </div>
    </>
  );
};

export default Hamburger;

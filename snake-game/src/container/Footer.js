import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="main-footer">
      <p className="col-sm">
        &copy;{new Date().getFullYear()} Mintbean Hackathon | Chris and Jesus |
        All rights reserved
      </p>
    </div>
  );
};

export default Footer;

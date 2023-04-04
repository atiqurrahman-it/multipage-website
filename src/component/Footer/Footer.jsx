import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Button from "../Button/Button";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="Footer_top">
        <p>Ready to get Start ? </p>
        <Button>get Start </Button>
      </div>
      <div className="footer-info">
        <div>
          <h5>MultiTech</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div>
          <h5>Subscribe to get important update </h5>
          <input type="text" placeholder="Enter E-mail" /> <br />
          <Button>Subscribe</Button>
        </div>
        <div>
          <h5>Follow Us </h5>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <div>
          <h5>Call Us</h5>
          <p>+8801791835039</p>
          <p>+8801518474541</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import './App.css'
import Button from "./component/Button/Button";
const Contact = () => {
  return (
    <div className="contact">
      <div>
        <h1>Contact With Us </h1>
        <input placeholder="Enter Your Name" type="text" /> <br/>
        <input placeholder="Enter Your Email" type="text" /> <br/>
        <textarea placeholder="Enter your Message"  rows="5" cols="37" /> <br/>
        <Button>Submit</Button>
      </div>
      <div>
        <img src="/public/images/contact.jpg" alt="image not found" />
      </div>
    </div>
  );
};

export default Contact;

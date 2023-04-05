import React from "react";
import Button from "../Button/Button";
// import banarPic from '../../assets/images.png'
import { Link } from "react-router-dom";

import './Banner.css'
const Banner = (props) => {
    const {name,img,description}=props
  return (
    <div className="Banner">
      <div className="Banner-info">
        <h5>This Is Me </h5>
        <h1>{name}</h1>
        <p>
            {description}
        </p>
        <Button> <Link to='/contact'> Hire Me </Link></Button>
      </div>
      <div className="banner-img">
        <img src={img} />
      </div>
    </div>
  );
};

export default Banner;

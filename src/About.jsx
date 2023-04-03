import React from "react";
import Banner from "./component/HeaderBanar/Banner";

const About = () => {
  const data = {
    name: "E-Tacqunick",
    img: "./public/images/header-2.png",
    description:
      "Lorem ipsum dolor consectetur, adipisicing elit. Explicabo consequuntur odit ipsam.",
  };
  return (
    <div>
      <Banner {...data}></Banner>
    </div>
  );
};

export default About;

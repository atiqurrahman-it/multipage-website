import React from "react";
import Banner from "./component/HeaderBanar/Banner";

const Home = () => {
  const data = {
    name: "MultiTech",
    img: "./public/images/header-1.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, iusto? ",
  };
  return (
    <>
      <Banner {...data}></Banner>
    </>
  );
};

export default Home;

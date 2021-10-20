import React from "react";

//components
import Navbar from "../Components/Navbar/navbar.components";
import HeroCarousal from "../Components/HeroCarousal/Herocarousal.component"

const DefaultLayout = (props) => {
  return (
    <>
    <Navbar />
    <HeroCarousal />
    {props.children}
    </>
  );
};

export default DefaultLayout;
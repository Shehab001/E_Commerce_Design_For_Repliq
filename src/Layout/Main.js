import React from "react";
import { Outlet } from "react-router";
import Carousal from "../Components/Carousal";
import Category from "../Components/Category/Category";
import EndSection from "../Components/EndSection";
import Footer from "../Components/Footer";
import Nav from "../Components/Navbar";
import SecondPage from "../Components/SecondPage";

const Main = () => {
  return (
    <div className="overflow-hidden">
      <Nav></Nav>
      <Carousal></Carousal>
      <SecondPage></SecondPage>
      <Category></Category>
      <Outlet></Outlet>
      <EndSection></EndSection>
      <Footer></Footer>
    </div>
  );
};

export default Main;

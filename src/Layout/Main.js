import React from "react";
import { Outlet } from "react-router";
import Carousal from "../Components/Carousal";
import Category from "../Components/Category/Category";
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
      <Footer></Footer>
    </div>
  );
};

export default Main;

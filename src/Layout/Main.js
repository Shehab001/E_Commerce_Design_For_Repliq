import React from "react";
import { Outlet } from "react-router";

import Footer from "../Components/Footer";
import Nav from "../Components/Navbar";

const Main = () => {
  return (
    <div className="overflow-hidden">
      <Nav></Nav>

      <Outlet></Outlet>

      <Footer></Footer>
    </div>
  );
};

export default Main;

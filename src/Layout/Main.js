import React from "react";
import { Outlet } from "react-router";
import Nav from "../Components/Navbar";

const Main = () => {
  return (
    <>
      <Nav></Nav>
      <Outlet></Outlet>
    </>
  );
};

export default Main;

import React from "react";
import Carousal from "./Carousal";
import Category from "./Category/Category";
import Product from "./Category/Product/Product";
import EndSection from "./EndSection";
import SecondPage from "./SecondPage";

const Home = () => {
  return (
    <div>
      <Carousal></Carousal>
      <SecondPage></SecondPage>
      <Category></Category>
      <Product></Product>
      <EndSection></EndSection>
    </div>
  );
};

export default Home;

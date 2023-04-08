import React, { Component } from "react";
import Slider from "react-slick";
import CategoryCard from "./CategoryCard";
import "./CategoryChild1.css";
import fashion from "../../Assets/electronics/beolab-19-by-bang-olufsen-240x280h.jpg";
import bags from "../../Assets/electronics/chris-taljaard-S__3xvlGDe8-unsplash.jpg";
import health from "../../Assets/electronics/compaq_presario-240x280h.jpg";
import footwear from "../../Assets/electronics/hp_2-240x280h.jpg";
import homedecor from "../../Assets/electronics/iphone_2-240x280h.jpg";

export default class CategoryChild3 extends Component {
  render() {
    const settings = {
      className: "center",
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 5,
      swipeToSlide: true,
      afterChange: function (index) {
        console.log(
          `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        );
      },
    };
    return (
      <div className="mx-10">
        <div className="mt-10">
          <Slider {...settings}>
            <div className="px-1">
              <CategoryCard data={fashion} name={"COMPONENTS"}></CategoryCard>
            </div>
            <div className="px-1">
              <CategoryCard data={bags} name={"JOYSTICK"}></CategoryCard>
            </div>
            <div className="px-1">
              <CategoryCard data={health} name={"DESKTOP PC"}></CategoryCard>
            </div>
            <div className="px-1">
              <CategoryCard data={footwear} name={"LAPTOP"}></CategoryCard>
            </div>
            <div className="px-1">
              <CategoryCard data={homedecor} name={"MOBILE"}></CategoryCard>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}

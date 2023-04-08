import React, { Component } from "react";
import Slider from "react-slick";
import CategoryCard from "./CategoryCard";
import "./CategoryChild1.css";
import fashion from "../../Assets/beauty/14-240x280h.jpg";
import bags from "../../Assets/beauty/25-240x280h.jpg";
import health from "../../Assets/beauty/28-240x280h.jpg";
import footwear from "../../Assets/beauty/brush-case-240x280h.jpg";
import homedecor from "../../Assets/beauty/carlos-rodriguez-QhK3jcoPCxM-unsplash.jpg";
import electronics from "../../Assets/beauty/set6-240x280h.jpg";

export default class CategoryChild2 extends Component {
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
              <CategoryCard data={fashion} name={"BODY"}></CategoryCard>
            </div>
            <div className="px-1">
              <CategoryCard data={bags} name={"LIPSTIC"}></CategoryCard>
            </div>
            <div className="px-1">
              <CategoryCard data={health} name={"MASCARA"}></CategoryCard>
            </div>
            <div className="px-1">
              <CategoryCard data={footwear} name={"MAKE UP"}></CategoryCard>
            </div>
            <div className="px-1">
              <CategoryCard data={homedecor} name={"FACE CREAM"}></CategoryCard>
            </div>
            <div className="px-1">
              <CategoryCard data={electronics} name={"BRUSHES"}></CategoryCard>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}

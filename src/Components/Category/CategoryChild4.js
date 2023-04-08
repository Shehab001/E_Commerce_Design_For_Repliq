import React, { Component } from "react";
import Slider from "react-slick";
import CategoryCard from "./CategoryCard";
import "./CategoryChild1.css";
import fashion from "../../Assets/fashion/assorted-blurred-background-boutique-994523-240x280h.jpg";
import bags from "../../Assets/fashion/c-240x280h.jpg";
import health from "../../Assets/fashion/glasses3-240x280h.jpg";
import footwear from "../../Assets/fashion/mediamodifier-t8HiP3e5abg-unsplash.jpg";

import electronics from "../../Assets/fashion/sweater-240x280h.jpg";
import apliances from "../../Assets/fashion/t2-240x280h.jpg";

export default class CategoryChild4 extends Component {
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
              <CategoryCard data={fashion} name={"DRESSES"}></CategoryCard>
            </div>
            <div className="px-1">
              <CategoryCard data={bags} name={"PANTS"}></CategoryCard>
            </div>
            <div className="px-1">
              <CategoryCard data={health} name={"ACCESSORIES"}></CategoryCard>
            </div>
            <div className="px-1">
              <CategoryCard data={footwear} name={"CAP"}></CategoryCard>
            </div>

            <div className="px-1">
              <CategoryCard data={electronics} name={"T-SHIRT"}></CategoryCard>
            </div>
            <div className="px-1">
              <CategoryCard data={apliances} name={"T-SHIRT"}></CategoryCard>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}

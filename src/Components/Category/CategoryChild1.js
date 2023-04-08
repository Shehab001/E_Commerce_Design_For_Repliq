import React, { Component } from "react";
import Slider from "react-slick";
import CategoryCard from "./CategoryCard";
import "./CategoryChild1.css";
import fashion from "../../Assets/demo09-240x280h.jpg";
import bags from "../../Assets/bagcat-240x280h.jpg";
import health from "../../Assets/beauty-240x280h.jpg";
import footwear from "../../Assets/f6-240x280h.jpg";
import homedecor from "../../Assets/acceso-240x280h.jpg";
import electronics from "../../Assets/elec-240x280h.jpg";
import apliances from "../../Assets/app-240x280h.jpg";
import baby from "../../Assets/baby-240x280h.jpg";
import flower from "../../Assets/rose-240x280h.jpg";

export default class CategoryChild1 extends Component {
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
              <CategoryCard data={fashion} name={"Fashion"}></CategoryCard>
            </div>
            <div className="px-1">
              <CategoryCard data={bags} name={"BAG"}></CategoryCard>
            </div>
            <div className="px-1">
              <CategoryCard
                data={health}
                name={"BEAUTY & HEALTH"}
              ></CategoryCard>
            </div>
            <div className="px-1">
              <CategoryCard data={footwear} name={"FOOT WEAR"}></CategoryCard>
            </div>
            <div className="px-1">
              <CategoryCard data={homedecor} name={"HOME DECOR"}></CategoryCard>
            </div>
            <div className="px-1">
              <CategoryCard
                data={electronics}
                name={"ELECTRONICS"}
              ></CategoryCard>
            </div>
            <div className="px-1">
              <CategoryCard data={apliances} name={"APPLIANCES"}></CategoryCard>
            </div>
            <div className="px-1">
              <CategoryCard data={baby} name={"BABY"}></CategoryCard>
            </div>
            <div className="px-1">
              <CategoryCard data={flower} name={"FLOWER"}></CategoryCard>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}

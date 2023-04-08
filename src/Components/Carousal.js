import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Button } from "@material-tailwind/react";

const Carousal = () => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
  };
  return (
    <div className="-mt-10">
      {" "}
      <Slider {...settings}>
        <div className="bg1 h-96">
          <div>
            <div className="col-span-2 text-start ml-10">
              <Button
                className="text-base font-semibold mt-16 tracking-widest	"
                size="sm"
              >
                Mobile
              </Button>
              <p className=" pb-3 text-5xl font-bold my-5 tracking-wider">
                Best mobile options<br></br> at any resolutions.
              </p>

              <Button
                className="text-base font-semibold tracking-widest"
                variant="outlined"
              >
                Learn More
              </Button>
            </div>
            <div className="col-span-3 p-5 "></div>
          </div>
        </div>
        <div className="bg2 h-96 ">
          <div>
            <div>
              <div className="col-span-2 text-start ml-10">
                <Button
                  className="text-base font-semibold mt-16 tracking-widest	"
                  size="sm"
                >
                  Layouts
                </Button>
                <p className=" pb-3 text-5xl font-bold my-5 tracking-wider">
                  Most advance admin<br></br> in opencart.
                </p>

                <Button
                  className="text-base font-semibold tracking-widest"
                  variant="outlined"
                >
                  Learn More
                </Button>
              </div>
              <div className="col-span-3 p-5 "></div>
            </div>
            <div className="col-span-3 p-5 "></div>
          </div>
        </div>
        <div className="bg3 h-96">
          <div>
            <div>
              <div className="col-span-2 text-start ml-10">
                <Button
                  className="text-base font-semibold mt-16 tracking-widest	"
                  size="sm"
                >
                  New Arrivals
                </Button>
                <p className=" pb-3 text-5xl font-bold my-5 tracking-wider">
                  Sound that goes<br></br>to your heart.
                </p>

                <Button
                  className="text-base font-semibold tracking-widest"
                  variant="outlined"
                >
                  Learn More
                </Button>
              </div>
              <div className="col-span-3 p-5 "></div>
            </div>
            <div className="col-span-3 p-5 "></div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousal;

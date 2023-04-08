import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import hdphn from "../Assets//s3-960x450h.png";
// import mbl from "../Assets/s1-960x450h.png";
// import pc from "../Assets/s2-960x450h.png";
import "./NavBar.css";

export default function Nav() {
  const [openNav, setOpenNav] = React.useState(false);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
  };

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col  gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography as="li" variant="small" color="blue-gray" className="p-1 ">
        <a
          href="#"
          className="flex items-center font-bold"
          style={{ letterSpacing: "3px" }}
        >
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a
          href="#"
          className="flex items-center font-bold"
          style={{ letterSpacing: "3px" }}
        >
          Products
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a
          href="#"
          className="flex items-center font-bold"
          style={{ letterSpacing: "3px" }}
        >
          Inventory
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a
          href="#"
          className="flex items-center font-bold"
          style={{ letterSpacing: "3px" }}
        >
          Cart
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a
          className="flex items-center font-bold"
          style={{ letterSpacing: "3px" }}
        >
          <Link to="/login">Log In</Link>
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a
          className="flex items-center font-bold"
          style={{ letterSpacing: "3px" }}
        >
          <Link to="/signup">Sign Up</Link>
        </a>
      </Typography>
    </ul>
  );

  return (
    <div className="overflow-hidden pb-10">
      <Navbar className="sticky inset-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4 ">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-medium"
          >
            <img
              src="https://res.cloudinary.com/dc9bjecdl/image/upload/v1680912534/journal-logo1x-185x32_nukuni.png"
              alt="icon"
            ></img>
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            {/* <Button
              variant="gradient"
              size="sm"
              className="hidden lg:inline-block"
            >
              <span>Buy Now</span>
            </Button> */}
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
          {/* <Button variant="gradient" size="sm" fullWidth className="mb-2">
            <span>Buy Now</span>
          </Button> */}
        </MobileNav>
      </Navbar>
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
}

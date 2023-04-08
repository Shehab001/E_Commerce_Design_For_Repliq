import { Button, Typography } from "@material-tailwind/react";
import React, { useState } from "react";
import classNames from "classnames";
import CategoryChild1 from "./CategoryChild1";
import CategoryChild2 from "./CategoryChild2";
import CategoryChild3 from "./CategoryChild3";
import CategoryChild4 from "./CategoryChild4";

const Category = () => {
  const [activeButton, setActiveButton] = useState(1);

  function handleClick(buttonId) {
    setActiveButton(buttonId);
  }

  function getButtonClasses(buttonId) {
    return classNames(
      "bg-[#696973] rounded-none border-r-2 hover:bg-[#0d0d6e] text-[8px] sm:text-sm",
      {
        "bg-[#0d0d6e] sm:text-sm text-[8px]": activeButton === buttonId,
      }
    );
  }

  return (
    <div className="bg-[#f8f8f8]  text-center py-20 my-10">
      <div>
        <Typography className="font-bold md:text-5xl sm:text-3xl text-2xl mb-5">
          Why buy from us?
        </Typography>

        <Typography className="opacity-70 mb-5 lg:px-48 sm:px-32 px-10">
          Journal has been the best selling and most loved Opencart theme since
          first launch in 2013. Tried and tested by over 20K people, Journal is
          the best Opencart theme framework on the market today.
        </Typography>
      </div>
      <div>
        <div className="">
          <span>
            <Button
              className={getButtonClasses(1)}
              onClick={() => handleClick(1)}
            >
              TOP CATEGORIES
            </Button>
          </span>
          <span>
            <Button
              className={getButtonClasses(2)}
              onClick={() => handleClick(2)}
            >
              ELECTRONICS
            </Button>
          </span>
          <span className="">
            <Button
              className={getButtonClasses(3)}
              onClick={() => handleClick(3)}
            >
              BEAUTY
            </Button>
          </span>
          <span>
            <Button
              className={getButtonClasses(4)}
              onClick={() => handleClick(4)}
            >
              FASHION
            </Button>
          </span>
        </div>
        {activeButton === 1 ? (
          <CategoryChild1></CategoryChild1>
        ) : activeButton === 2 ? (
          <CategoryChild3></CategoryChild3>
        ) : activeButton === 3 ? (
          <CategoryChild2></CategoryChild2>
        ) : (
          <CategoryChild4></CategoryChild4>
        )}
      </div>
    </div>
  );
};

export default Category;

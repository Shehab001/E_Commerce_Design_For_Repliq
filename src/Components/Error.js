import React from "react";
import error from "../Assets/T-rex.json";
import Lottie from "lottie-react";

const Error = () => {
  return (
    <div className="w-2/5		mx-auto ">
      <Lottie animationData={error} />
    </div>
  );
};

export default Error;

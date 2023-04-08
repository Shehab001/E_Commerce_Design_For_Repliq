import { Typography } from "@material-tailwind/react";
import React from "react";

const SecondPage = () => {
  return (
    <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 px-5 mt-10 bg-[rgba(58,71,84,1)] text-white font-sans font-semibold tracking-wider">
      <div className=" grid grid-cols-2 items-center justify-items-center	py-5">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="rgba(233, 102, 49, 1)"
            className="w-20 h-20 rounded-full	border-2 p-3	border-cyan-300	"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
            />
          </svg>
        </div>
        <div className="text-start ">
          <Typography>Free Shipping</Typography>
          <Typography>Free Delivery Over $100</Typography>
        </div>
      </div>
      <div className=" grid grid-cols-2 items-center justify-items-center	py-5">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="rgba(233, 102, 49, 1)"
            className="w-20 h-20 rounded-full	border-2 p-3	border-cyan-300	"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
            />
          </svg>
        </div>
        <div className="text-start ">
          <Typography>Free Returns</Typography>
          <Typography>Hassle Free Returns</Typography>
        </div>
      </div>
      <div className=" grid grid-cols-2 items-center justify-items-center	py-5">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="rgba(233, 102, 49, 1)"
            className="w-20 h-20 rounded-full	border-2 p-3	border-cyan-300	"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
            />
          </svg>
        </div>
        <div className="text-start ">
          <Typography>Secure Shopping</Typography>
          <Typography>Best security features</Typography>
        </div>
      </div>
      <div className=" grid grid-cols-2 items-center justify-items-center	py-5">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="rgba(233, 102, 49, 1)"
            className="w-20 h-20 rounded-full	border-2 p-3	border-cyan-300	"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
            />
          </svg>
        </div>
        <div className="text-start ">
          <Typography>Unlimited Blocks</Typography>
          <Typography>Any content, any page</Typography>
        </div>
      </div>
    </div>
  );
};

export default SecondPage;

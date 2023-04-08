import React from "react";
import joystick from "../Assets/electronics/chris-taljaard-S__3xvlGDe8-unsplash.jpg";
import polish from "../Assets/beauty/25-240x280h.jpg";
import { Typography } from "@material-tailwind/react";

const Cart = () => {
  return (
    <div>
      <div className="min-h-screen bg-gray-100 flex justify-center items-center py-20 -mt-10 -mb-20">
        <div className="bg-white w-full md:w-3/4 lg:w-1/2 rounded-lg shadow-lg p-6">
          <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>

          <div className="flex flex-col md:flex-row mb-6">
            <div className="md:w-1/2 p-4">
              <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                <img src={joystick} alt="Product Image" className="h-48"></img>
              </div>
            </div>

            <div className="md:w-1/2 p-4">
              <h2 className="text-lg font-bold mb-2">JoyStick 102BS</h2>
              <p className="text-gray-600 mb-4">Very Good</p>
              <p className="text-gray-800 font-bold text-lg">৳ 800</p>
              <div className="flex items-center mt-4">
                <label className="mr-2">Quantity:</label>
                <input
                  type="number"
                  className="form-input w-16 text-center"
                  placeholder="0"
                />
              </div>
              <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg mt-4">
                Update Cart
              </button>
              <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg ml-4 mt-4">
                Remove Item
              </button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row mb-6">
            <div className="md:w-1/2 p-4">
              <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                <img src={polish} alt="Product Image" className="h-48" />
              </div>
            </div>

            <div className="md:w-1/2 p-4">
              <h2 className="text-lg font-bold mb-2">Nail Polish</h2>
              <p className="text-gray-600 mb-4">Very Good</p>
              <p className="text-gray-800 font-bold text-lg">৳ 300</p>
              <div className="flex items-center mt-4">
                <label className="mr-2">Quantity:</label>
                <input
                  type="number"
                  className="form-input w-16 text-center"
                  placeholder="0"
                />
              </div>
              <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg mt-4">
                Update Cart
              </button>
              <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg ml-4 mt-4">
                Remove Item
              </button>
            </div>
          </div>
          <Typography className="text-end font-semibold">
            Total: ৳ 1100
          </Typography>
          <div className="flex justify-between border-t border-gray-400 pt-6">
            <div className="flex items-center">
              <label className="mr-2">Coupon Code:</label>
              <input
                type="text"
                className="form-input w-48"
                placeholder="Enter coupon code"
              />
            </div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
              Apply Coupon
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

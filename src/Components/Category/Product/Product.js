import { Typography } from "@material-tailwind/react";
import React from "react";
import fakeData from "../../../FakeData.json";
import "./Product.css";
import { motion } from "framer-motion";

const Product = () => {
  // const {product, handleAddToCart} = props;
  const product = fakeData;

  console.log(product);

  return (
    <motion.div
      initial={{ x: -150, opacity: 0 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      {" "}
      <div className="mb-20">
        <Typography className="text-3xl font-bold tracking-wider mb-10">
          All Product
        </Typography>
        <div className="grid lg:grid-cols-3 md:grid-cols-2  justify-center gap-4 mx-5">
          {product.map((item) => (
            <div className="product">
              <img src={item.img} alt=""></img>
              <div className="product-info">
                <p className="product-name">{item.name}</p>
                <p>Price: ${item.price}</p>
                <p>
                  <small>Seller: {item.seller}</small>
                </p>
                <p>
                  <small>Ratings: {item.ratings} stars</small>
                </p>
              </div>
              <button className="btn-cart">
                <p className="btn-text">Add to Cart</p>
                {/* <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> */}
              </button>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Product;

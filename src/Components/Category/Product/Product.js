import { Typography } from "@material-tailwind/react";
import React from "react";
import fakeData from "../../../FakeData.json";
import "./Product.css";

const Product = () => {
  // const {product, handleAddToCart} = props;
  const product = fakeData;

  console.log(product);

  return (
    <div className="mb-20">
      <Typography className="text-3xl font-bold tracking-wider mb-10">
        All Product
      </Typography>
      <div className="grid grid-cols-4 gap-4 mx-5">
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
  );
};

export default Product;

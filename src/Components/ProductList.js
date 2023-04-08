import {
  Button,
  Typography,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  CardFooter,
  CardBody,
  CardHeader,
  Card,
} from "@material-tailwind/react";
import React, { Fragment, useState } from "react";
import fakeData from "../FakeData.json";
import { motion } from "framer-motion";

const ProductList = () => {
  const [id, setId] = useState(0);
  const [data, setData] = useState(0);
  // console.log(data);

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
    setData(fakeData.filter((num) => num.id === id));
  };
  return (
    <motion.div
      initial={{ x: -150, opacity: 0 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="overflow-auto">
        {/* modal part */}
        <Fragment className="	overflow-auto	">
          <Dialog
            open={open}
            handler={handleOpen}
            className="md:min-w-[40%] min-w-[80%] overflow-auto	"
          >
            <DialogHeader>Product Details</DialogHeader>
            <Card className="w-full  mx-auto my-20 rounded-none shadow-xl overflow-auto	">
              <CardHeader color="blue" className="relative h-56 rounded-none">
                <img
                  src={data[0]?.img}
                  alt="img-blur-shadow"
                  className="h-full w-full"
                />
              </CardHeader>
              <CardBody className="text-start">
                <Typography variant="h5" className="mb-2 tracking-wider">
                  Category: {data[0]?.category}
                </Typography>
                <Typography className="font-semibold tracking-wider">
                  Name : {data[0]?.name}
                </Typography>
                <Typography className="font-semibold tracking-wider">
                  Stock : {data[0]?.stock}
                </Typography>
                <Typography className="font-semibold tracking-wider">
                  Ratings Counted : {data[0]?.ratingsCount}
                </Typography>
                <Typography className="font-semibold tracking-wider">
                  Shipping : {data[0]?.shipping}
                </Typography>
                <Typography className="font-semibold tracking-wider">
                  Rating : {data[0]?.rating}
                </Typography>
              </CardBody>
              <CardFooter
                divider
                className="flex items-center justify-between py-3"
              >
                <Typography
                  className="font-semibold tracking-wider"
                  variant="small"
                >
                  Price : ৳{data[0]?.price}
                </Typography>
                <Typography
                  variant="small"
                  color="gray"
                  className="flex gap-1 font-semibold"
                >
                  <i className="fas fa-map-marker-alt fa-sm mt-[3px]  tracking-wider" />
                  Seller : {data[0]?.seller}
                </Typography>
              </CardFooter>
            </Card>
          </Dialog>
        </Fragment>
        {/* modal part */}
        <Typography className="text-3xl font-bold mt-5 mb-10">
          Product List
        </Typography>
        <div className="shadow-xl	">
          <div className="grid grid-cols-3 font-semibold tracking-wider mb-2">
            <div className="bg-green-300	py-3">Name</div>
            <div className="bg-green-300	py-3">Price</div>
            <div className="bg-green-300	py-3">Action</div>
          </div>
          {fakeData.map((data) => (
            <div className="grid grid-cols-3 font-semibold tracking-wider mb-2 items-center">
              <div className="bg-cyan-300	py-3">{data.name}</div>
              <div className="bg-blue-200	 py-3"> ৳ {data.price}</div>
              <div className="bg-yellow-100	 py-3">
                {" "}
                <Button
                  className="rounded-none "
                  size="sm"
                  onMouseEnter={() => {
                    setId(data.id);
                  }}
                  onClick={handleOpen}
                >
                  Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProductList;

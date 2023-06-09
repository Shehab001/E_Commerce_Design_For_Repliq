import { Button } from "@material-tailwind/react";
import React from "react";
import { motion } from "framer-motion";

const EndSection = () => {
  return (
    <motion.div
      initial={{ x: -150, opacity: 0 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      {" "}
      <div style={{ backgroundColor: "rgb(239 157 151)" }}>
        <section className="p-5">
          <div className="container p-5 text-center  font-semibold">
            <h1 className="text-3xl">LET'S STAY IN TOUCH</h1>
            <p className="text-2xl">Get updates on sales specials and more.</p>
            <form class="d-flex justify-content-center mt-10">
              <input
                class="form-control  w-25 py-3 px-5"
                type="search"
                placeholder="Enter Your E-Mail"
                aria-label="Search"
              ></input>
              <Button className="rounded-none h-[50px] mb-1" size="lg">
                SEND
              </Button>
            </form>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default EndSection;

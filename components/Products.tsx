"use client";
import { PRODUCT_LIST } from "@/constants";
import React from "react";
import Image from "next/image";
import { titleVariants1, productVariants } from "./Animation";
import { motion } from "framer-motion";

const Products = () => {
  return (
    <section id="products" className="flex flex-col xl:flex-row border-20">
      <div className="w-screen">
        <div className="invisible md:visible">
          <div className="home-banner-container">
            <Image
              src="/vecteezy-element.png"
              alt="banner1"
              width={700}
              height={32}
              className="home-bannerImage-container"
            />
          </div>
          <div className="home-banner-container">
            <Image
              src="/orange-background.png"
              alt="banner1"
              width={700}
              height={32}
              className="home-bannerImage-container1"
            />
          </div>
          <div className="home-banner-container">
            <Image
              src="/cor-blob.png"
              alt="banner1"
              width={700}
              height={32}
              className="home-bannerImage-container2"
            />
          </div>
        </div>
        <motion.h1
          variants={titleVariants1}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="flex justify-center font-font1 pb-10 text-5xl"
        >
          Our <span className="text-green-500">&nbsp;Products</span>
        </motion.h1>

        <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
          {/* <!--   ✅ Product card 1 - Starts Here 👇 --> */}
          {PRODUCT_LIST.map((data) => (
            <motion.div
              variants={productVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              key={data.key}
              className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
            >
              {/* <a href=""> */}
              <div>
                <Image
                  src={data.image}
                  alt={data.label}
                  width={320}
                  height={288}
                  className="h-80 w-72 object-cover rounded-t-xl"
                />
                <div className="px-4 py-3 w-72">
                  <span className="text-gray-400 mr-3 uppercase text-xs">
                    {data.brand}
                  </span>
                  <p className="text-lg font-bold text-black truncate block capitalize">
                    {data.label}
                  </p>
                  <div className="flex items-center">
                    <p className="text-lg font-semibold text-black cursor-auto my-3">
                      {data.price1}
                    </p>
                    <del>
                      <p className="text-sm text-gray-600 cursor-auto ml-2">
                        {data.price2}
                      </p>
                    </del>
                    <div className="ml-auto">{data.wieght}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </section>
      </div>
    </section>
  );
};

export default Products;

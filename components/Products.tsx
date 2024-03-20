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
              <a href="#">
                <Image
                  src={data.image}
                  alt="Product"
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
                    {/* <div className="ml-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-bag-plus"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                      />
                      <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                    </svg>
                  </div> */}
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
          {/* <!--   🛑 Product card 1 - Ends Here  --> */}

          {/* <!--   ✅ Product card 2 - Starts Here 👇 --> */}
          {/* <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <a href="#">
              <img
                src="https://images.unsplash.com/photo-1651950519238-15835722f8bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mjh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt="Product"
                className="h-80 w-72 object-cover rounded-t-xl"
              />
              <div className="px-4 py-3 w-72">
                <span className="text-gray-400 mr-3 uppercase text-xs">
                  Brand
                </span>
                <p className="text-lg font-bold text-black truncate block capitalize">
                  Compost
                </p>
                <div className="flex items-center">
                  <p className="text-lg font-semibold text-black cursor-auto my-3">
                    ₹149
                  </p>
                  <del>
                    <p className="text-sm text-gray-600 cursor-auto ml-2">
                      ₹199
                    </p>
                  </del>
                  <div className="ml-auto">50 Kg</div>
                </div>
              </div>
            </a>
          </div> */}
          {/* <!--   🛑 Product card 2- Ends Here  -->

    <!--   ✅ Product card 3 - Starts Here 👇 --> */}
          {/* <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <a href="#">
              <img
                src="https://images.unsplash.com/photo-1651950537598-373e4358d320?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt="Product"
                className="h-80 w-72 object-cover rounded-t-xl"
              />
              <div className="px-4 py-3 w-72">
                <span className="text-gray-400 mr-3 uppercase text-xs">
                  Brand
                </span>
                <p className="text-lg font-bold text-black truncate block capitalize">
                  Organic Potas
                </p>
                <div className="flex items-center">
                  <p className="text-lg font-semibold text-black cursor-auto my-3">
                    ₹149
                  </p>
                  <del>
                    <p className="text-sm text-gray-600 cursor-auto ml-2">
                      ₹199
                    </p>
                  </del>
                  <div className="ml-auto">50 Kg</div>
                </div>
              </div>
            </a>
          </div> */}
          {/* <!--   🛑 Product card 3 - Ends Here  -->

    <!--   ✅ Product card 4 - Starts Here 👇 --> */}
          {/* <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <a href="#">
              <img
                src="https://images.unsplash.com/photo-1651950540805-b7c71869e689?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mjl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt="Product"
                className="h-80 w-72 object-cover rounded-t-xl"
              />
              <div className="px-4 py-3 w-72">
                <span className="text-gray-400 mr-3 uppercase text-xs">
                  Brand
                </span>
                <p className="text-lg font-bold text-black truncate block capitalize">
                  Organic NPK
                </p>
                <div className="flex items-center">
                  <p className="text-lg font-semibold text-black cursor-auto my-3">
                    ₹149
                  </p>
                  <del>
                    <p className="text-sm text-gray-600 cursor-auto ml-2">
                      ₹199
                    </p>
                  </del>
                  <div className="ml-auto">50 Kg</div>
                </div>
              </div>
            </a>
          </div> */}
          {/* <!--   🛑 Product card 4 - Ends Here  -->

    <!--   ✅ Product card 5 - Starts Here 👇 --> */}
          {/* <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <a href="#">
              <img
                src="https://images.unsplash.com/photo-1649261191624-ca9f79ca3fc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt="Product"
                className="h-80 w-72 object-cover rounded-t-xl"
              />
              <div className="px-4 py-3 w-72">
                <span className="text-gray-400 mr-3 uppercase text-xs">
                  Brand
                </span>
                <p className="text-lg font-bold text-black truncate block capitalize">
                  Boan Mela
                </p>
                <div className="flex items-center">
                  <p className="text-lg font-semibold text-black cursor-auto my-3">
                    ₹149
                  </p>
                  <del>
                    <p className="text-sm text-gray-600 cursor-auto ml-2">
                      ₹199
                    </p>
                  </del>
                  <div className="ml-auto">50 Kg</div>
                </div>
              </div>
            </a>
          </div> */}
          {/* <!--   🛑 Product card 5 - Ends Here  -->

    <!--   ✅ Product card 6 - Starts Here 👇 --> */}
          {/* <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <a href="/">
              <img
                src="https://images.unsplash.com/photo-1649261191606-cb2496e97eee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt="Product"
                className="h-80 w-72 object-cover rounded-t-xl"
              />
              <div className="px-4 py-3 w-72">
                <span className="text-gray-400 mr-3 uppercase text-xs">
                  Brand
                </span>
                <p className="text-lg font-bold text-black truncate block capitalize">
                  Fish Amino Acid
                </p>
                <div className="flex items-center">
                  <p className="text-lg font-semibold text-black cursor-auto my-3">
                    ₹149
                  </p>
                  <del>
                    <p className="text-sm text-gray-600 cursor-auto ml-2">
                      ₹199
                    </p>
                  </del>
                  <div className="ml-auto">50 Kg</div>
                </div>
              </div>
            </a>
          </div> */}
          {/* <!--   🛑 Product card 6 - Ends Here  --> */}
          {/* <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <a href="#">
              <img
                src="https://images.unsplash.com/photo-1649261191606-cb2496e97eee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt="Product"
                className="h-80 w-72 object-cover rounded-t-xl"
              />
              <div className="px-4 py-3 w-72">
                <span className="text-gray-400 mr-3 uppercase text-xs">
                  Brand
                </span>
                <p className="text-lg font-bold text-black truncate block capitalize">
                  Micro Nutrition
                </p>
                <div className="flex items-center">
                  <p className="text-lg font-semibold text-black cursor-auto my-3">
                    ₹149
                  </p>
                  <del>
                    <p className="text-sm text-gray-600 cursor-auto ml-2">
                      ₹199
                    </p>
                  </del>
                  <div className="ml-auto">50 Kg</div>
                </div>
              </div>
            </a>
          </div>

          <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <a href="#">
              <img
                src="https://images.unsplash.com/photo-1649261191606-cb2496e97eee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt="Product"
                className="h-80 w-72 object-cover rounded-t-xl"
              />
              <div className="px-4 py-3 w-72">
                <span className="text-gray-400 mr-3 uppercase text-xs">
                  Brand
                </span>
                <p className="text-lg font-bold text-black truncate block capitalize">
                  Humic Powder
                </p>
                <div className="flex items-center">
                  <p className="text-lg font-semibold text-black cursor-auto my-3">
                    ₹149
                  </p>
                  <del>
                    <p className="text-sm text-gray-600 cursor-auto ml-2">
                      ₹199
                    </p>
                  </del>
                  <div className="ml-auto">50 Kg</div>
                </div>
              </div>
            </a>
          </div>

          <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <a href="#">
              <img
                src="https://images.unsplash.com/photo-1649261191606-cb2496e97eee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt="Product"
                className="h-80 w-72 object-cover rounded-t-xl"
              />
              <div className="px-4 py-3 w-72">
                <span className="text-gray-400 mr-3 uppercase text-xs">
                  Brand
                </span>
                <p className="text-lg font-bold text-black truncate block capitalize">
                  Seaweed
                </p>
                <div className="flex items-center">
                  <p className="text-lg font-semibold text-black cursor-auto my-3">
                    ₹149
                  </p>
                  <del>
                    <p className="text-sm text-gray-600 cursor-auto ml-2">
                      ₹199
                    </p>
                  </del>
                  <div className="ml-auto">50 Kg</div>
                </div>
              </div>
            </a>
          </div> */}
        </section>
        {/* </div> */}
      </div>
    </section>
  );
};

export default Products;

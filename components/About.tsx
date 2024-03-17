"use client";
import React from "react";
import Image from "next/image";
import { titleVariants1, productVariants } from "./Animation";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="flex flex-col xl:flex-row border-20">
      <div className="w-screen p-5">
        {/* <div className="invisible md:visible home-banner-container">
          <Image
            src="/color-blob-banner.png"
            alt="banner1"
            width={700}
            height={32}
            className="home-bannerImage-container3"
          />
        </div> */}

        <div className="relative flex pt-12">
          <div
            className="absolute max-w-[1000px] top-[200px] left-[10px] z-[-2] opacity-70 
          md:top-[180px] md:max-w-[550px] md:left-[-40px]
          lg:top-[140px] lg:max-w-[700px] lg:left-[-40px]
          xl:top-[70px] xl:max-w-[900px] xl:left-[50px] "
          >
            <Image
              src="/graph.png"
              alt="banner7"
              width={1000}
              height={200}
              // className="home-bannerImage-container"
            />
          </div>
        </div>
        <motion.h1
          variants={titleVariants1}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="flex justify-center font-font1 py-10 text-5xl"
        >
          What we do!
        </motion.h1>
        <div className="sm:flex items-center max-w-full xl:mx-20">
          <div className="sm:w-1/2 p-10">
            <div className="image object-center text-center flex justify-center items-center">
              {/* <Image
                src="/about_img.jpg"
                alt="aboutimg"
                width={400}
                height={29}
                className="border rounded-xl w-[350px] shadow-md"
              /> */}

              <div className="grid grid-cols-2  gap-4">
                <div className="grid gap-4">
                  <div>
                    <Image
                      className="h-auto max-w-full rounded-lg shadow-xl"
                      width={300}
                      height={50}
                      src="/about_1.jpeg"
                      alt=""
                    />
                  </div>

                  <div>
                    <Image
                      className="h-auto max-w-full rounded-lg shadow-xl"
                      width={300}
                      height={50}
                      src="/about_2.jpeg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="grid gap-4">
                  <div>
                    <Image
                      className="h-auto max-w-full rounded-lg mt-5 shadow-xl"
                      width={300}
                      height={29}
                      src="/about_4.jpeg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sm:w-1/2 p-10 lg:pr-16">
            <div className="text">
              <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">
                About us
              </span>
              <h2 className="my-4 font-bold text-3xl  sm:text-4xl font-font3">
                About <span className="text-yellow-500">Our Company</span>
              </h2>
              <p className="text-gray-700">
                Welcome to{" "}
                <span className="text-green-600 font-semibold">
                  KrishiAgro,
                </span>{" "}
                your trusted partner in agriculture, proudly rooted in India's
                rich farming heritage. Specializing in premium vermicompost,
                nutrient-packed seaweeds, and a variety of agricultural
                solutions, we're dedicated to serving local farmers with
                products tailored to Indian soil and climate.{" "}
                <span className="text-green-600 font-semibold">
                  Our commitment to sustainability and eco-friendly practices
                  drives us to deliver high-quality, locally sourced products
                  that promote soil health and enhance crop yields.
                </span>{" "}
                Join us in nurturing India's agricultural future with natural,
                homegrown solutions from
                <span className="text-green-600 font-semibold">
                  {" "}
                  KrishiAgro.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

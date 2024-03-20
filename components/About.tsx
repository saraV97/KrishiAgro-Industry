"use client";
import React from "react";
import Image from "next/image";
import { titleVariants1 } from "./Animation";
import { motion } from "framer-motion";
import useLightbox from "@/components/useLightbox";
import slides from "@/constants";

const About = () => {
  const { openLightbox, renderLightbox } = useLightbox();

  console.log(slides);

  return (
    <section id="about" className="flex flex-col xl:flex-row border-20">
      <div className="w-screen p-5">
        <div className="relative flex pt-12">
          <div
            className="absolute max-w-[1000px] top-[200px] left-[10px] z-[-2] opacity-70 
          md:top-[260px] md:max-w-[550px] md:left-[-40px]
          lg:top-[190px] lg:max-w-[700px] lg:left-[-40px]
          xl:top-[120px] xl:max-w-[900px] xl:left-[50px] "
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
          What we
          <span className="text-green-500">&nbsp;do!</span>
        </motion.h1>
        <div className="sm:flex items-center max-w-full xl:mx-20">
          <div className="sm:w-1/2 p-10">
            <div className="image object-center text-center flex justify-center items-center">
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-4">
                  <div>
                    <Image
                      className="h-auto max-w-full rounded-lg shadow-xl"
                      width={300}
                      height={50}
                      src="/about_1.webp"
                      alt=""
                    />
                  </div>

                  <div>
                    <Image
                      className="h-auto max-w-full rounded-lg shadow-xl"
                      width={300}
                      height={50}
                      src="/about_2.webp"
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
                      src="/about_3.webp"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              {/* <button
                type="button"
                className="mt-4 p-2 w-52 text-xl mx-14 lg:mx-36 font-font3 rounded-xl bg-yellow-300 border-green-700 border-b-2  "
                onClick={openLightbox}
              >
                Open Lightbox
              </button>

              {renderLightbox({ slides })} */}
              <a
                // href="/gallery"
                onClick={openLightbox}
                className="mt-8 p-2 cursor-pointer text-xl mx-14 lg:mx-36 font-font3 flex justify-center rounded-xl hover:bg-yellow-200 bg-yellow-300 border-green-700 border-b-2  "
              >
                Our Gallery
              </a>
              {renderLightbox({ slides })}
            </div>
          </div>
          <div className="sm:w-1/2 sm:p-10 p-5 lg:pr-16">
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
                your trusted partner in agriculture, proudly rooted in
                India&apos;s rich farming heritage. Specializing in premium
                vermicompost, nutrient-packed seaweeds, and a variety of
                agricultural solutions, we&apos;re dedicated to serving local
                farmers with products tailored to Indian soil and climate.{" "}
                <span className="text-green-600 font-semibold">
                  Our commitment to sustainability and eco-friendly practices
                  drives us to deliver high-quality, locally sourced products
                  that promote soil health and enhance crop yields.
                </span>{" "}
                Join us in nurturing India&apos;s agricultural future with
                natural, homegrown solutions from
                <span className="text-green-600 font-semibold">
                  {" "}
                  KrishiAgro.
                </span>
              </p>

              <div className="flex flex-col justify-center items-center pt-5">
                <span className=" font-font3 text-black border-b-2 px-4 border-green-700 rounded-xl">
                  Spotlighted by BBC Tamil
                </span>
                <video
                  width="1920"
                  height="1080"
                  controls
                  preload="none"
                  className="rounded-xl mt-4"
                  playsInline
                  poster="https://res.cloudinary.com/dvzyx6yzg/image/upload/v1710836977/Krishi/iyagtiiptwlkwgvsps41.jpg"
                >
                  <source
                    src="https://res.cloudinary.com/dvzyx6yzg/video/upload/v1710835771/Krishi%20agro.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

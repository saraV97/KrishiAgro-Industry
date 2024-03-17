"use client";
import Logo from "@/constants/logo";
import React from "react";
import {
  titleVariants,
  fadeInAnimationVariants1,
  fadeInAnimationVariants2,
} from "./Animation";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="home" className="flex flex-col xl:flex-row border-20">
      <div
        className="bg-hero-pattern xl:bg-[url('/heroimg1.jpg')] relative right-0 top-0 z-10
       h-screen w-screen bg-cover bg-center
       before:content-['']
            before:absolute
            before:inset-0
            before:block
            before:bg-gradient-to-b
            before:from-blue-700
            before:to-yellow-400
            before:opacity-20
            before:z-[-5]"
      >
        <motion.div
          variants={titleVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="flex flex-col justify-center items-center mt-10 leading-10"
        >
          <motion.h1
            variants={titleVariants}
            className="font-font3 text-yellow-400 text-7xl lg:text-9xl px-10 py-20 text-center"
          >
            <span className="w-full">Nourish your soil, </span>
            <br />
            <span className="w-full">Nourish your crops</span>
          </motion.h1>
          <motion.h2
            variants={titleVariants}
            className="font-font3 text-white text-5xl lg:text-7xl px-5 pt-14 "
          >
            <span className="text-center">
              Grow <span className="text-green-500"> nature </span> with us
            </span>
            {/* <br /> */}
            {/* <span className=""></span> */}
          </motion.h2>
        </motion.div>
        <motion.div
          variants={fadeInAnimationVariants1}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="flex justify-center items-center"
        >
          <Logo />
        </motion.div>
        <motion.div
          variants={fadeInAnimationVariants2}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="scroll-down svg"
          id="home-scroll-down"
        >
          <a href="#products">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
              id="Layer_2"
              x="0px"
              y="0px"
              viewBox="0 0 25.166666 37.8704414"
              enable-background="new 0 0 25.166666 37.8704414"
              xmlSpace="preserve"
            >
              <path
                className="stroke"
                fill="none"
                stroke="#c7c4b8"
                stroke-width="2.5"
                stroke-miterlimit="10"
                d="M12.5833445 36.6204414h-0.0000229C6.3499947 36.6204414 1.25 31.5204487 1.25 25.2871208V12.5833216C1.25 6.3499947 6.3499951 1.25 12.5833216 1.25h0.0000229c6.2333269 0 11.3333216 5.0999947 11.3333216 11.3333216v12.7037992C23.916666 31.5204487 18.8166714 36.6204414 12.5833445 36.6204414z"
              ></path>
              <path
                className="scroller"
                fill="#c7c4b8"
                d="M13.0833359 19.2157116h-0.9192753c-1.0999985 0-1.9999971-0.8999996-1.9999971-1.9999981v-5.428606c0-1.0999994 0.8999987-1.9999981 1.9999971-1.9999981h0.9192753c1.0999985 0 1.9999981 0.8999987 1.9999981 1.9999981v5.428606C15.083334 18.315712 14.1833344 19.2157116 13.0833359 19.2157116z"
              ></path>
            </svg>
            {/* <i className="icon icon-arrow-down"></i> */}
            <div className="pt-2 pr-1 text-gray-100 ">Scroll</div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

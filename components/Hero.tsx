"use client";
// import Logo from "@/constants/logo";
import React, { useEffect, useState } from "react";
import {
  titleVariants,
  fadeInAnimationVariants1,
  fadeInAnimationVariants2,
} from "./Animation";
import { motion } from "framer-motion";
import Logo1 from "@/constants/Logo1";

const Hero = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = width <= 1024;

  return (
    // <section id="home" className="flex flex-col border-20">
    //   <div
    //     className="bg-hero-pattern xl:bg-[url('/heroimg1.jpg')] relative right-0 top-0 z-10
    //    h-screen w-screen bg-cover bg-center
    //    before:content-['']
    //         before:absolute
    //         before:inset-0
    //         before:block
    //         before:bg-gradient-to-b
    //         before:from-blue-700
    //         before:to-yellow-400
    //         before:opacity-20
    //         before:z-[-5]"
    //   >
    //     <motion.div
    //       variants={titleVariants}
    //       initial="initial"
    //       whileInView="animate"
    //       viewport={{ once: true }}
    //       className="flex flex-col justify-center items-center mt-10 leading-2"
    //     >
    //       <motion.h1
    //         variants={titleVariants}
    //         className="font-font3 text-yellow-400 text-6xl md:text-7xl lg:text-9xl px-10 py-20 text-center"
    //       >
    //         <span className="w-full">Nourish your soil, </span>
    //         <br />
    //         <span className="w-full">Nourish your crops</span>
    //       </motion.h1>
    //       <motion.h2
    //         variants={titleVariants}
    //         className="font-font3 text-white text-4xl md:text-5xl lg:text-7xl px-5 pt-6 "
    //       >
    //         <span className="text-center">
    //           Grow <span className="text-green-500"> nature </span> with us
    //         </span>
    //         {/* <br /> */}
    //         {/* <span className=""></span> */}
    //       </motion.h2>
    //       <motion.div
    //         variants={fadeInAnimationVariants1}
    //         initial="initial"
    //         whileInView="animate"
    //         viewport={{ once: true }}
    //         className="flex justify-center items-center xs:w-64 xs:h-64"
    //       >
    //         <Logo />
    //       </motion.div>
    //     </motion.div>

    //     <motion.div
    //       variants={fadeInAnimationVariants2}
    //       initial="initial"
    //       whileInView="animate"
    //       viewport={{ once: true }}
    //       className="scroll-down svg"
    //       id="home-scroll-down"
    //     >
    //       <a href="#products">
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           xmlnsXlink="http://www.w3.org/1999/xlink"
    //           version="1.1"
    //           id="Layer_2"
    //           x="0px"
    //           y="0px"
    //           viewBox="0 0 25.166666 37.8704414"
    //           enableBackground="new 0 0 25.166666 37.8704414"
    //           xmlSpace="preserve"
    //         >
    //           <path
    //             className="stroke"
    //             fill="none"
    //             stroke="#c7c4b8"
    //             strokeWidth="2.5"
    //             strokeMiterlimit="10"
    //             d="M12.5833445 36.6204414h-0.0000229C6.3499947 36.6204414 1.25 31.5204487 1.25 25.2871208V12.5833216C1.25 6.3499947 6.3499951 1.25 12.5833216 1.25h0.0000229c6.2333269 0 11.3333216 5.0999947 11.3333216 11.3333216v12.7037992C23.916666 31.5204487 18.8166714 36.6204414 12.5833445 36.6204414z"
    //           ></path>
    //           <path
    //             className="scroller"
    //             fill="#c7c4b8"
    //             d="M13.0833359 19.2157116h-0.9192753c-1.0999985 0-1.9999971-0.8999996-1.9999971-1.9999981v-5.428606c0-1.0999994 0.8999987-1.9999981 1.9999971-1.9999981h0.9192753c1.0999985 0 1.9999981 0.8999987 1.9999981 1.9999981v5.428606C15.083334 18.315712 14.1833344 19.2157116 13.0833359 19.2157116z"
    //           ></path>
    //         </svg>
    //         {/* <i className="icon icon-arrow-down"></i> */}
    //         <div className="pt-2 pr-1 text-gray-100 ">Scroll</div>
    //       </a>
    //     </motion.div>
    //   </div>
    // </section>
    <div className="relative isolate overflow-hidden bg-hero-pattern max-w-screen bg-cover bg-center h-screen">
      {/* <div className="xl:bg-hero-pattern1 max-w-screen bg-opacity-5 z-8 bg-transparent"></div> */}
      <div
        className="absolute left-[calc(50%-4rem)] -z-10 top-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
        aria-hidden="true"
      >
        <div className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"></div>
      </div>
      <div className="mt-[-50px] flex h-screen items-center justify-center">
        <motion.div
          variants={titleVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="max-w-full flex-shrink-0 px-4 text-center lg:mx-0 lg:pt-8"
        >
          <h1 className="mt-10 opacity-75 text-4xl xs:text-[50px] lg:text-[8rem] font-bold tracking-tight font-font3 text-black sm:text-7xl">
            Feed the <span className="text-black">soil, </span>
            <br />
            Feed the
            <span className="text-black"> future</span>
            {/* <span className="text-sky-500">your workflow</span> with
            <span className="text-sky-500">Zynx</span> */}
          </h1>

          <motion.div
            variants={fadeInAnimationVariants1}
            className="mt-4 flex items-center justify-center gap-x-6 mx-10 md:mx-5 lg:mx-0"
          >
            {/* <a
              href="/register"
              className="rounded-md bg-sky-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
              rel="noreferrer"
            >
              Try Now →
            </a> */}
            <Logo1 />
          </motion.div>
          <p className="mt-5 mx-14 text-3xl lg:text-4xl font-font2 leading-8 text-white">
            <span className="text-center">
              Grow smarter, Farm better with our
              <span className="text-yellow-300"> natural solutions.</span>
            </span>
          </p>
          {/* <p className="mt-6 text-lg  md:text-xl  px-10 leading-8 text-[#FBFADA]">
            <span className="text-center">
              <span className="text-yellow-400">Grow smarter, </span>
              Grow smarter, farm better with our natural solutions.
            </span>
          </p> */}
          <motion.div
            variants={fadeInAnimationVariants2}
            className="scroll-down svg"
            id="home-scroll-down"
          >
            {/* className="mt-6 text-3xl font-font3 leading-8 text-white"> */}
            <a
              href="#products"
              className="flex flex-col justify-center items-center"
            >
              <div className="pb-1 text-gray-100 opacity-60">
                {isMobile ? "Swipe" : "Scroll"}
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                id="Layer_2"
                x="0px"
                y="0px"
                viewBox="0 0 25.166666 37.8704414"
                enableBackground="new 0 0 25.166666 37.8704414"
                xmlSpace="preserve"
              >
                <path
                  className="stroke"
                  fill="none"
                  stroke="#c7c4b8"
                  strokeWidth="2.5"
                  strokeMiterlimit="10"
                  opacity="0.5"
                  d="M12.5833445 36.6204414h-0.0000229C6.3499947 36.6204414 1.25 31.5204487 1.25 25.2871208V12.5833216C1.25 6.3499947 6.3499951 1.25 12.5833216 1.25h0.0000229c6.2333269 0 11.3333216 5.0999947 11.3333216 11.3333216v12.7037992C23.916666 31.5204487 18.8166714 36.6204414 12.5833445 36.6204414z"
                ></path>
                <path
                  className="scroller"
                  fill="#c7c4b8"
                  d="M13.0833359 19.2157116h-0.9192753c-1.0999985 0-1.9999971-0.8999996-1.9999971-1.9999981v-5.428606c0-1.0999994 0.8999987-1.9999981 1.9999971-1.9999981h0.9192753c1.0999985 0 1.9999981 0.8999987 1.9999981 1.9999981v5.428606C15.083334 18.315712 14.1833344 19.2157116 13.0833359 19.2157116z"
                ></path>
              </svg>
              {/* <i className="icon icon-arrow-down"></i> */}

              {/* <div className=" lg:invisible pt-2 pr-1 text-gray-100 ">Swipe</div> */}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;

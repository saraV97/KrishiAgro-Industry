"use client";
import React, { useEffect, useState } from "react";
import {
  titleVariants,
  fadeInAnimationVariants1,
  fadeInAnimationVariants2,
} from "./Animation";
import { motion } from "framer-motion";

const Hero = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = width <= 1024;

  return (
    <div className="relative isolate overflow-hidden bg-hero-pattern max-w-screen bg-cover bg-center h-screen">
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
          <h1 className="mt-10 mx-10 opacity-75 text-4xl xs:text-[50px] lg:text-[8rem] font-bold tracking-tight font-font3 text-black sm:text-7xl">
            Feed the <span className="text-black">soil, </span>
            <br />
            Feed the
            <span className="text-black"> future</span>
          </h1>
          <motion.p
            variants={titleVariants}
            className="mt-5 mx-10 text-3xl lg:text-4xl font-font2 leading-8 text-white"
          >
            <span className="text-center">
              Grow smarter, Farm better with our
              <span className="text-yellow-300"> natural solutions.</span>
            </span>
          </motion.p>

          <div className="flex flex-col justify-center items-center m-5 p-5">
            <p className="mx-auto mb-5 max-w-xl xxs:text-xs xs:text-base sm:text-lg text-gray-200 leading-7 ">
              We are dedicated to empowering farmers with the finest fertilizers
              and soil enhancers. From boosting yields to promoting soil health,
              our products are tailored to fuel your agricultural success.
              Explore our range and witness the difference in your harvests
              today!
            </p>
            <div className="flex justify-around items-center gap-8">
              <a
                href="#products"
                className="bg-white hover:bg-green-700 hover:text-white bg-opacity-70 rounded-lg py-2 px-5 "
              >
                Explore Products
              </a>
              <a
                href="https://wa.me/9585937577?text=Hi%2C%20I%27m%20am%20interested%20in%20your%20products"
                className="text-white hover:text-black"
              >
                <svg
                  className="w-10 h-10"
                  viewBox="0 0 20 20"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  fill="currentColor"
                >
                  <g id="SVGRepo_iconCarrier">
                    <g
                      id="Page-1"
                      stroke="none"
                      strokeWidth="1"
                      fill="currentColor"
                      fillRule="evenodd"
                    >
                      <g
                        transform="translate(-300.000000, -7599.000000)"
                        fill="currentColor"
                        clipRule="evenodd"
                        fillRule="evenodd"
                        opacity={0.7}
                      >
                        <g
                          id="icons"
                          transform="translate(56.000000, 160.000000)"
                        >
                          <path d="M259.821,7453.12124 C259.58,7453.80344 258.622,7454.36761 257.858,7454.53266 C257.335,7454.64369 256.653,7454.73172 254.355,7453.77943 C251.774,7452.71011 248.19,7448.90097 248.19,7446.36621 C248.19,7445.07582 248.934,7443.57337 250.235,7443.57337 C250.861,7443.57337 250.999,7443.58538 251.205,7444.07952 C251.446,7444.6617 252.034,7446.09613 252.104,7446.24317 C252.393,7446.84635 251.81,7447.19946 251.387,7447.72462 C251.252,7447.88266 251.099,7448.05372 251.27,7448.3478 C251.44,7448.63589 252.028,7449.59418 252.892,7450.36341 C254.008,7451.35771 254.913,7451.6748 255.237,7451.80984 C255.478,7451.90987 255.766,7451.88687 255.942,7451.69881 C256.165,7451.45774 256.442,7451.05762 256.724,7450.6635 C256.923,7450.38141 257.176,7450.3464 257.441,7450.44643 C257.62,7450.50845 259.895,7451.56477 259.991,7451.73382 C260.062,7451.85686 260.062,7452.43903 259.821,7453.12124 M254.002,7439 L253.997,7439 L253.997,7439 C248.484,7439 244,7443.48535 244,7449 C244,7451.18666 244.705,7453.21526 245.904,7454.86076 L244.658,7458.57687 L248.501,7457.3485 C250.082,7458.39482 251.969,7459 254.002,7459 C259.515,7459 264,7454.51465 264,7449 C264,7443.48535 259.515,7439 254.002,7439"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </a>
            </div>
          </div>

          <motion.div
            variants={fadeInAnimationVariants2}
            className="scroll-down svg"
            id="home-scroll-down"
          >
            <a
              href="#about"
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
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;

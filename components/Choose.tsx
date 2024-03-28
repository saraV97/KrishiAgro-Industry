"use client";
import Locally from "@/constants/locally";
import Quality from "@/constants/quality";
import Sustainability from "@/constants/sustainability";
import React from "react";
import { titleVariants1 } from "./Animation";
import { motion } from "framer-motion";

const Choose = () => {
  return (
    <section className="flex flex-col xl:flex-row">
      <div className="w-screen">
        <motion.h1
          variants={titleVariants1}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="flex justify-center font-font1 py-10 text-5xl"
        >
          Why choose <span className="text-green-500">&nbsp;us?</span>
        </motion.h1>
        <div className="-m-4 flex flex-wrap p-8">
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div className="mb-9 rounded-xl py-8 px-7 shadow-md transition-all hover:shadow-lg sm:p-9 lg:px-6 xl:px-9">
              <div className="mx-auto mb-7 inline-block text-blue-600">
                <Locally />
              </div>
              <div>
                <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
                  Locally Sourced Excellence
                </h3>
                <p className="text-base font-medium text-body-color">
                  We pride ourselves on sourcing our products locally, ensuring
                  that they are perfectly attuned to all soil and climate
                  conditions with proven results.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div className="mb-9 rounded-xl py-8 px-7 shadow-md transition-all hover:shadow-lg sm:p-9 lg:px-6 xl:px-9">
              <div className="mx-auto mb-7 inline-block text-orange-600">
                <Quality />
              </div>
              <div>
                <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
                  Quality Assurance
                </h3>
                <p className="text-base font-medium text-body-color">
                  Our products undergo rigorous quality control measures to
                  guarantee that you receive only the finest vermicompost,
                  seaweeds, and agricultural solutions.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div className="mb-9 rounded-xl py-8 px-7 shadow-md transition-all hover:shadow-lg sm:p-9 lg:px-6 xl:px-9">
              <div className="mx-auto mb-7 inline-block text-green-500">
                <Sustainability />
              </div>
              <div>
                <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
                  Sustainable Practices
                </h3>
                <p className="text-base font-medium text-body-color">
                  We are committed to sustainable farming practices that not
                  only benefit your crops but also help preserve the environment
                  for future generations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Choose;

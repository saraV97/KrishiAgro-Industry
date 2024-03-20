"use client";
import React, { useRef } from "react";
import Button from "./Button";
import { titleVariants1 } from "./Animation";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef(null);

  const sendEmail = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    emailjs
      .sendForm(
        `${process.env.PUBLIC_KEY}`,
        `${process.env.SERVICE_ID}`,
        form.current!,
        `${process.env.TEMPLATE_ID}`
      )
      .then(
        () => {
          alert("Mail sent successfully!");
        },
        (error) => {
          alert("Error: Mail not sent.");
        }
      );
    event.currentTarget.reset();
  };

  return (
    <section id="contact" className="flex flex-col xl:flex-row border-20">
      <div className="w-screen mt-14">
        <motion.h1
          variants={titleVariants1}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="flex justify-center font-font1 py-10 text-5xl"
        >
          Contact <span className="text-green-500">&nbsp;us</span>
        </motion.h1>
        <section className="text-gray-600 body-font relative px-3 xs:px-2">
          <div
            className="container px-5 py-20 mx-auto flex sm:flex-nowrap flex-wrap  
          border rounded-xl shadow-xl bg-gradient-to-r from-green-300 to-green-500"
          >
            <div className="lg:w-2/4 md:w-1/2 bg-transparent flex flex-col md:mr-auto w-full md:py-8 mb-8 md:mb-0 pb-10 sm:pl-5">
              <h2 className="text-gray-900 text-center text-lg mb-1 font-medium title-font">
                Send a message
              </h2>
              <p className="leading-relaxed mb-5 text-center text-gray-600">
                Get a quote.
              </p>
              <form ref={form} onSubmit={sendEmail}>
                <div className="relative mb-4">
                  <label
                    id="name"
                    className="leading-7 text-sm text-gray-800 pl-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    name="name"
                    className="w-full bg-white rounded-xl border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div className="relative mb-4">
                  <label
                    id="email"
                    className="leading-7 text-sm text-gray-800 pl-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter you email ID"
                    id="email"
                    name="email"
                    className="w-full bg-white rounded-xl border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div className="relative mb-4">
                  <label
                    id="email"
                    className="leading-7 text-sm text-gray-800 pl-2"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    placeholder="Enter your city"
                    name="city"
                    className="w-full bg-white rounded-xl border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div className="relative mb-4">
                  <label
                    id="message"
                    className="leading-7 text-sm text-gray-800 pl-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="Type your message"
                    name="message"
                    className="w-full bg-white rounded-xl border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
                <div className="flex justify-center">
                  <Button
                    type="submit"
                    title="Send"
                    // icon="/user.svg"
                    variant="btn_yellow w-full"
                  />
                </div>
              </form>
            </div>

            <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:ml-10 p-10 flex items-end justify-start relative md:ml-20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.832294218636!2d78.04825991168767!3d11.125864988999192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babd32b0f62d32b%3A0x4ce1c871cd571d64!2sKrishi%20Agro%20Industry!5e0!3m2!1sen!2sin!4v1710704226245!5m2!1sen!2sin"
                width="100%"
                height="100%"
                className="absolute inset-0"
                title="map"
              ></iframe>

              <div className=" bg-white relative flex flex-wrap py-6 rounded shadow-md mt-40">
                <div className="lg:w-1/2 px-6">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                    ADDRESS
                  </h2>
                  <a
                    href="https://maps.app.goo.gl/dCZfJ64kJQqwwp1C8"
                    className="mt-1"
                  >
                    <span className="font-bold text-green-500">
                      KrishiAgro Industry
                    </span>
                    <br />
                    6/24, Kudi Street, Unjapalayam Ponjai Idaiyar Keelmugam,
                    Mohanur TK, Namakkal, DT, Velur, Tamil Nadu 638182
                  </a>
                </div>
                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                    EMAIL
                  </h2>
                  <a className="text-yellow-500 leading-relaxed">
                    krishiagroindustry22@gmail.com
                  </a>
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                    PHONE
                  </h2>
                  <p className="leading-relaxed">+91 76398 87577</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Contact;

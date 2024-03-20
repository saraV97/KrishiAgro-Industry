"use client";
import { NAV_LINKS } from "@/constants";
// import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
// import Button from "./Button";
// import Logo from "@/constants/logo";
import { topDownVariants1 } from "./Animation";
import { motion } from "framer-motion";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  // useEffect(() => {
  //   // Applying on mount
  //   if (nav) {
  //     document.body.style.overflow = "hidden";
  //   }
  //   // Applying on unmount
  //   else {
  //     return () => {
  //       document.body.style.overflow = "visible";
  //     };
  //   }
  // }, []);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    if (nav) {
      document.body.style.overflow = "hidden";
    } else document.body.style.overflow = "scroll";
    return () => {};
  }, [nav]);

  return (
    <motion.div
      variants={topDownVariants1}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="flexBetween max-container padding-container flex-no-wrap fixed top-0 w-full z-30
     py-5 backdrop-blur-sm border-b bg-slate-400 bg-opacity-30"
    >
      <Link href="/#home">
        {/* <Image
          src="/krishilogo.svg"
          alt="logo"
          width={150}
          height={29}
          className="text-white"
        /> */}
        {/* <Logo /> */}
        {/* <div className="text-2xl text-green-500">Krishi</div> */}
        <h1 className="w-full text-3xl font-bold text-green-700 underline-offset-3 underline decoration-green-700">
          Krishi.
        </h1>
      </Link>
      <ul className=" hidden h-full gap-12 lg:flex px-10 rounded-lg pt-1 bg-white bg-opacity-50">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className=" regular-16 text-black flexCenter 
            cursor-pointer pb-1.5 transition-all hover:font-bold hover:text-green-500"
          >
            {link.label}
          </Link>
        ))}
      </ul>
      {/* <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div> */}
      {/* <Image
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden w-10 m-0"
      /> */}

      {/* Mobile Navigation*/}

      <div onClick={handleNav} className="block lg:hidden z-40">
        {nav ? (
          <button
            className="flex items-center px-3 py-2 border rounded
           border-slate-300 text-slate-700 hover:text-green-500
            hover:border-gray-500"
          >
            {/* <Image
            src="/menu.png"
            alt="menu"
            width={32}
            height={32}
            className="h-5 w-5"
          /> */}

            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.293 5.293a1 1 0 0 1 1.414 0L12 10.586l5.293-5.293a1 1 0 1 1 1.414 1.414L13.414 12l5.293 5.293a1 1 0 0 1-1.414 1.414L12 13.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L10.586 12 5.293 6.707a1 1 0 0 1 0-1.414z"
                fill="currentColor"
              />
            </svg>
          </button>
        ) : (
          <button
            className="flex items-center px-3 py-2 border rounded
           border-white text-black hover:text-green-500 hover:border-gray-500"
          >
            {/* <Image
            src="/close.png"
            alt="close"
            width={32}
            height={32}
            className="h-5 w-5"
          /> */}
            <svg
              fill="none"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 18.0048C22 18.5544 21.5544 19 21.0048 19H12.9952C12.4456 19 12 18.5544 12 18.0048C12 17.4552 12.4456 17.0096 12.9952 17.0096H21.0048C21.5544 17.0096 22 17.4552 22 18.0048Z"
                fill="currentColor"
              />
              <path
                d="M22 12.0002C22 12.5499 21.5544 12.9954 21.0048 12.9954H2.99519C2.44556 12.9954 2 12.5499 2 12.0002C2 11.4506 2.44556 11.0051 2.99519 11.0051H21.0048C21.5544 11.0051 22 11.4506 22 12.0002Z"
                fill="currentColor"
              />
              <path
                d="M21.0048 6.99039C21.5544 6.99039 22 6.54482 22 5.99519C22 5.44556 21.5544 5 21.0048 5H8.99519C8.44556 5 8 5.44556 8 5.99519C8 6.54482 8.44556 6.99039 8.99519 6.99039H21.0048Z"
                fill="currentColor"
              />
            </svg>
          </button>
        )}
      </div>
      <ul
        className={
          nav
            ? "fixed lg::hidden left-0 top-0 w-full bg-white h-screen flex flex-col p-10 gap-10 justify-center items-center ease-in-out duration-500"
            : " w-[60%] h-screen flex flex-col p-10 gap-10 justify-center items-center duration-500 ease-in-out fixed top-0 bottom-0 left-[200%]"
        }
      >
        {/* Mobile Logo */}
        <h1 className="w-full text-3xl font-bold text-green-700 xs:mb-40  underline-offset-4 underline decoration-green-900">
          Krishi.
        </h1>
        {/* Mobile Navigation Items */}
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            onClick={handleNav}
            className="p-4 border-b bg-yellow-300 border-b-green-700 rounded-xl shadow-lg px-20 hover:bg-green-500 duration-300 hover:text-black cursor-pointer border-gray-600"
          >
            {link.label}
          </Link>
        ))}

        <div className="xs:mt-10 border-t-2 flex gap-20 ">
          <a
            href="#"
            className="text-gray-500 py-10 hover:text-gray-900 dark:hover:text-white dark:text-gray-700"
          >
            <svg
              className="w-16 h-16"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
          <a
            href="#"
            className="text-gray-500 py-10 hover:text-gray-900 dark:hover:text-white dark:text-gray-700"
          >
            <svg
              className="w-16 h-16"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </ul>
    </motion.div>
  );
};

export default Navbar;

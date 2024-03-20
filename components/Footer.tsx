import Logo1 from "@/constants/Logo1";
import React from "react";

const Footer = () => {
  return (
    <section className="flex flex-col xl:flex-row ">
      <div className="w-full mt-10">
        {/* <h1 className="flex justify-center font-font1 py-10 text-5xl text-center">
          What our customers say
        </h1> */}

        <div className=" bg-green-300">
          <div className="max-w-screen-lg py-10 px-4 sm:px-6 text-gray-800 sm:flex justify-between mx-auto">
            <div className="p-5 sm:w-2/12 sm:border-r border-black text-center md:text-left">
              <div className="text-sm uppercase text-amber-900 font-bold font-font3">
                Related Links
              </div>
              <ul>
                <li className="my-2">
                  <a className="hover:text-white" href="#home">
                    Home
                  </a>
                </li>
                <li className="my-2">
                  <a className="hover:text-white" href="#products">
                    Products
                  </a>
                </li>
                <li className="my-2">
                  <a className="hover:text-white" href="#about">
                    About
                  </a>
                </li>
                <li className="my-2">
                  <a className="hover:text-white" href="#contact">
                    Contact
                  </a>
                </li>
                <li className="my-2">
                  <a className="hover:text-white" href="/gallery">
                    Gallery
                  </a>
                </li>
              </ul>
            </div>
            <div className="p-5 sm:w-7/12 sm:border-r border-black text-center">
              <h3 className="font-bold text-xl text-amber-900 mb-4 font-font3">
                Connect us to know more.
              </h3>
              <p className="text-gray-800 text-sm mb-10">
                Join us in cultivating a brighter future for farming, one
                harvest at a time.
              </p>
              <div
                // variants={fadeInAnimationVariants1}
                className="my-[-40px] flex items-center justify-center gap-x-6 mx-7 md:mx-5 lg:mx-0"
              >
                <Logo1 />
              </div>
              {/* <Logo /> */}
            </div>
            <div className="p-5 sm:w-3/12  text-center md:text-left">
              <div className="text-sm uppercase text-amber-900 font-bold font-font3">
                Contact Us
              </div>
              <ul>
                <li className="my-2">
                  <a
                    className="hover:text-white"
                    href="https://maps.app.goo.gl/dCZfJ64kJQqwwp1C8"
                  >
                    6/24, Kudi Street, Unjapalayam Ponjai Idaiyar Keelmugam,
                    Mohanur TK, Namakkal, DT, Velur, Tamil Nadu 638182
                  </a>
                </li>
                <li className="my-2">
                  <a
                    className="hover:text-white text-sm break-words"
                    href="https://mail.google.com/mail/u/0/?fs=1&to=krishiagroindustry22@gmail.com&su=YourSubject&body=Hey&tf=cm"
                  >
                    krishiagroindustry22@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex py-5 m-auto text-gray-800 text-sm flex-col items-center border-t border-black max-w-screen-xl">
            <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
              <ul className="flex justify-center mt-5 space-x-5">
                <li>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-700"
                  >
                    <svg
                      className="w-10 h-10"
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
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-700"
                  >
                    <svg
                      className="w-10 h-10"
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
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-700"
                  >
                    <svg
                      className="w-10 h-10"
                      fill="currentColor"
                      viewBox="0 -3.5 24 24"
                      id="meteor-icon-kit__solid-youtube"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M23.4593 2.63137C23.1843 1.59561 22.3738 0.77987 21.3447 0.50304C19.4795 0 12 0 12 0C12 0 4.52059 0 2.65529 0.50304C1.62622 0.77991 0.815739 1.59561 0.540659 2.63137C0.040863 4.50876 0.040863 8.4258 0.040863 8.4258C0.040863 8.4258 0.040863 12.3427 0.540659 14.2201C0.815739 15.2559 1.62622 16.0376 2.65529 16.3145C4.52059 16.8175 12 16.8175 12 16.8175C12 16.8175 19.4794 16.8175 21.3447 16.3145C22.3738 16.0376 23.1843 15.2559 23.4593 14.2201C23.9591 12.3427 23.9591 8.4258 23.9591 8.4258C23.9591 8.4258 23.9591 4.50876 23.4593 2.63137zM9.5538 11.9821V4.86942L15.8051 8.4258L9.5538 11.9821z"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            <div className="text-center lg:flex flex-row flex-nowrap justify-between items-center content-center  lg:w-[95%]">
              <div className="my-5">
                © KrishiAgro {new Date().getFullYear()}. All Rights Reserved.
              </div>
              <div className="my-5 hover:text-blue-400 hover:font-bold">
                <a href="https://portfolio-1184b.web.app/">
                  Designed and built by Sara.
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;

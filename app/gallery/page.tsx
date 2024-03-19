"use client";
import { titleVariants1 } from "@/components/Animation";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

const Gallery = () => {
  return (
    <main className="mt-20 mx-5">
      <div>
        <motion.h1
          variants={titleVariants1}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="flex justify-center font-font1 py-10 text-5xl"
        >
          Our
          <span className="text-green-500">&nbsp;Gallery</span>
        </motion.h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="grid gap-4">
            <div>
              <Image
                width={500}
                height={400}
                className="h-auto max-w-full rounded-lg"
                src="https://res.cloudinary.com/dvzyx6yzg/image/upload/v1710836980/Krishi/potouu371zk4mvfyflnk.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://res.cloudinary.com/dvzyx6yzg/image/upload/v1710836974/Krishi/oyydo7257lmlnckpa7my.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://res.cloudinary.com/dvzyx6yzg/image/upload/v1710836980/Krishi/l6vjosertybpjup1yhof.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://res.cloudinary.com/dvzyx6yzg/image/upload/v1710836977/Krishi/b1enp7c881pu5i5ntiqt.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://res.cloudinary.com/dvzyx6yzg/image/upload/v1710836978/Krishi/obe1u75xxllwetzbwi0z.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://res.cloudinary.com/dvzyx6yzg/image/upload/v1710836979/Krishi/qh73dsfqb09naxseifoe.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://res.cloudinary.com/dvzyx6yzg/image/upload/v1710836977/Krishi/bbenvc1vzwaqsaalsfk9.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://res.cloudinary.com/dvzyx6yzg/image/upload/v1710836972/Krishi/kpt8j9hjigpjtjwyeuwx.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://res.cloudinary.com/dvzyx6yzg/image/upload/v1710836980/Krishi/qvz7dnhn1owvopty05pn.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://res.cloudinary.com/dvzyx6yzg/image/upload/v1710836972/Krishi/zvnet8ytqqkkpbgwrtoa.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://res.cloudinary.com/dvzyx6yzg/image/upload/v1710836978/Krishi/uphkvgcylaingmmluykn.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://res.cloudinary.com/dvzyx6yzg/image/upload/v1710836967/Krishi/grbwxknjvmcmmywx19vk.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://res.cloudinary.com/dvzyx6yzg/image/upload/v1710836968/Krishi/jvbui6zw9313urkpfmz7.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://res.cloudinary.com/dvzyx6yzg/image/upload/v1710836976/Krishi/txmbmimlqwlbva03refj.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://res.cloudinary.com/dvzyx6yzg/image/upload/v1710836972/Krishi/wztinallncjxptgycz3r.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://res.cloudinary.com/dvzyx6yzg/image/upload/v1710836974/Krishi/k8jyrrqeyzt3zixyrecv.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://res.cloudinary.com/dvzyx6yzg/image/upload/v1710836972/Krishi/jnfh9pvmu4zqiyyz8bs0.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://res.cloudinary.com/dvzyx6yzg/image/upload/v1710836967/Krishi/lx2jmca49e5o0vakadtg.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://res.cloudinary.com/dvzyx6yzg/image/upload/v1710836975/Krishi/y2dtukd4mtblqdh0dxq3.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Gallery;

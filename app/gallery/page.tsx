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
                src="https://res.cloudinary.com/dvzyx6yzg/image/upload/v1710865138/Krishi%20Compressed/hpmbw5imwhquxly0houo.webp"
                alt=""
              />
            </div>
            <div>
              <Image
                width={500}
                height={400}
                className="h-auto max-w-full rounded-lg"
                src="https://res.cloudinary.com/dvzyx6yzg/image/upload/v1710865138/Krishi%20Compressed/dkwfkd1nw96auuqe43ot.webp"
                alt=""
              />
            </div>
            <div>
              <Image
                width={500}
                height={400}
                className="h-auto max-w-full rounded-lg"
                src="https://res.cloudinary.com/dvzyx6yzg/image/upload/v1710865137/Krishi%20Compressed/n6q7jy3vplnobdxndrto.webp"
                alt=""
              />
            </div>
            <div>
              <Image
                width={500}
                height={400}
                className="h-auto max-w-full rounded-lg"
                src="https://res.cloudinary.com/dvzyx6yzg/image/upload/v1710865136/Krishi%20Compressed/qospnlr4zq1cgxzqnquw.webp"
                alt=""
              />
            </div>
            <div>
              <Image
                width={500}
                height={400}
                className="h-auto max-w-full rounded-lg"
                src="https://res.cloudinary.com/dvzyx6yzg/image/upload/v1710865138/Krishi%20Compressed/i8ox9mi6198t06cla0oy.webp"
                alt=""
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <Image
                width={500}
                height={400}
                className="h-auto max-w-full rounded-lg"
                src="https://res.cloudinary.com/dvzyx6yzg/image/upload/v1710865138/Krishi%20Compressed/u6c6cqh8tmuhaqxyxgnd.webp"
                alt=""
              />
            </div>
            <div>
              <Image
                width={500}
                height={400}
                className="h-auto max-w-full rounded-lg"
                src="https://res.cloudinary.com/dvzyx6yzg/image/upload/v1710865136/Krishi%20Compressed/ygmtsa9grfkafh1i33si.webp"
                alt=""
              />
            </div>
            <div>
              <Image
                width={500}
                height={400}
                className="h-auto max-w-full rounded-lg"
                src="https://res.cloudinary.com/dvzyx6yzg/image/upload/v1710865137/Krishi%20Compressed/pf0punivy11omrcjakqv.webp"
                alt=""
              />
            </div>
            <div>
              <Image
                width={500}
                height={400}
                className="h-auto max-w-full rounded-lg"
                src="https://res.cloudinary.com/dvzyx6yzg/image/upload/v1710865138/Krishi%20Compressed/xirsjljuj5tvrh4vmfff.webp"
                alt=""
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <Image
                width={500}
                height={400}
                className="h-auto max-w-full rounded-lg"
                src="https://res.cloudinary.com/dvzyx6yzg/image/upload/v1710865137/Krishi%20Compressed/jlapmibln0hngstxtau7.webp"
                alt=""
              />
            </div>
            <div>
              <Image
                width={500}
                height={400}
                className="h-auto max-w-full rounded-lg"
                src="https://res.cloudinary.com/dvzyx6yzg/image/upload/v1710865139/Krishi%20Compressed/vzyabdhpg6vztowmekho.webp"
                alt=""
              />
            </div>
            <div>
              <Image
                width={500}
                height={400}
                className="h-auto max-w-full rounded-lg"
                src="https://res.cloudinary.com/dvzyx6yzg/image/upload/v1710865136/Krishi%20Compressed/dc4obkgrb5cnybculpxw.webp"
                alt=""
              />
            </div>
            <div>
              <Image
                width={500}
                height={400}
                className="h-auto max-w-full rounded-lg"
                src="https://res.cloudinary.com/dvzyx6yzg/image/upload/v1710865137/Krishi%20Compressed/e5qyqjdet3vnkxdkn2fv.webp"
                alt=""
              />
            </div>
            <div>
              <Image
                width={500}
                height={400}
                className="h-auto max-w-full rounded-lg"
                src="https://res.cloudinary.com/dvzyx6yzg/image/upload/v1710865139/Krishi%20Compressed/qoaibsjw4qsywpr3pqfp.webp"
                alt=""
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <Image
                width={500}
                height={400}
                className="h-auto max-w-full rounded-lg"
                src="https://res.cloudinary.com/dvzyx6yzg/image/upload/v1710865139/Krishi%20Compressed/sonmwbpbafw01i5k08u0.webp"
                alt=""
              />
            </div>
            <div>
              <Image
                width={500}
                height={400}
                className="h-auto max-w-full rounded-lg"
                src="https://res.cloudinary.com/dvzyx6yzg/image/upload/v1710865137/Krishi%20Compressed/tjzxujw6sbzaiskdt913.webp"
                alt=""
              />
            </div>
            <div>
              <Image
                width={500}
                height={400}
                className="h-auto max-w-full rounded-lg"
                src="https://res.cloudinary.com/dvzyx6yzg/image/upload/v1710865137/Krishi%20Compressed/i7kwahdl51pyhmkgsure.webp"
                alt=""
              />
            </div>
            <div>
              <Image
                width={500}
                height={400}
                className="h-auto max-w-full rounded-lg"
                src="https://res.cloudinary.com/dvzyx6yzg/image/upload/v1710865138/Krishi%20Compressed/e5klkposuoigperufexn.webp"
                alt=""
              />
            </div>
            <div>
              <Image
                width={500}
                height={400}
                className="h-auto max-w-full rounded-lg"
                src="https://res.cloudinary.com/dvzyx6yzg/image/upload/v1710865136/Krishi%20Compressed/saqxtnbzyjsen6xat6wa.webp"
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

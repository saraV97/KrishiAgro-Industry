import { easeIn, easeOut } from "framer-motion";

const topDownVariants = {
  initial: {
    y: -50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      //   staggerChildren: 0.1,
    },
  },
};

const topDownVariants1 = {
  initial: {
    y: -50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      delay: 0.4,
      ease: easeOut,
    },
  },
};

const staggerVariants = {
  initial: {
    x: -50,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const staggerVariantsRight = {
  initial: {
    x: 50,
    opacity: 0,
  },
  animate: (index: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const titleVariants = {
  initial: {
    opacity: 0,
    y: 15,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      //   delay: 0.25,
      staggerChildren: 0.4,
    },
  },
};

const productVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easeIn,
    },
  },
};

const titleVariants1 = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: 0.25,
    },
  },
};

const fadeInAnimationVariants1 = {
  initial: {
    opacity: 0,
    y: 0,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.7,
      delay: 0.6,
    },
  },
};
const fadeInAnimationVariants2 = {
  initial: {
    opacity: 0,
    y: 0,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.7,
      delay: 0.6,
    },
  },
};

export {
  titleVariants,
  fadeInAnimationVariants1,
  fadeInAnimationVariants2,
  titleVariants1,
  staggerVariants,
  staggerVariantsRight,
  topDownVariants,
  topDownVariants1,
  productVariants,
};

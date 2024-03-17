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
      duration: 0.5,
      delay: 0.6,
      ease: easeOut,
      //   staggerChildren: 0.1,
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
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
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
      duration: 0.7,
      //   delay: 0.25,
      staggerChildren: 0.3,
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
      //   delay: 0.25,
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
      // staggerChildren: 0.3,
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
      delay: 0.3,
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

// const selectZoomVariants = {
//   whileHover: { scale: 1.1 },
//   transition: { type: "spring", stiffness: 400, damping: 10 },
// };

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

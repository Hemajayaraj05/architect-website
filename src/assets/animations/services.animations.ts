// src/animations/services.animations.ts

import type { Variants } from "framer-motion";

export const cardVariants: Variants = {
  hidden: (direction: number) => ({
    opacity: 0,
    x: direction,
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

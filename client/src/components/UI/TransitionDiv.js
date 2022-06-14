import React from "react";
import { motion } from "framer-motion";

const TransitionDiv = (props) => {
  const Variants = {
    offscreen: {
      y: 300,
    },
    onscreen: {
      y: 0,
      rotate: 0,
      transition: {
        type: "Inertia",
        duration: 0.6,
      },
    },
  };
  return (
    <motion.div
      className={props.className}
      initial="offscreen"
      whileInView="onscreen"
      variants={Variants}
    >
      {props.children}
    </motion.div>
  );
};

export default TransitionDiv;

import React from "react";
import { motion } from "framer-motion";
const Transition = () => {
  const transitionVariants = {
    initial: {
      x: "100%",
      width: "100%",
    },
    animate: {
      x: "0%",
      width: "0%",
    },
    exit: {
      x: ["0%", "100%"],
      width: ["0%", "100%"],
    },
  };
  return (
    <>
      <motion.div
        variants={transitionVariants}
        className="fixed top-0 bottom-0 right-full h-screen w-screen z-30 bg-[#2e2257]"
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
      />

      <motion.div
        variants={transitionVariants}
        className="fixed top-0 bottom-0 right-full h-screen w-screen z-20 bg-[#0c0f5f]"
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.4, duration: 0.6, ease: "easeInOut" }}
      />
      <motion.div
        variants={transitionVariants}
        className="fixed top-0 bottom-0 right-full h-screen w-screen z-10 bg-[#1254aa]"
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.6, duration: 0.6, ease: "easeInOut" }}
      />
    </>
  );
};

export default Transition;

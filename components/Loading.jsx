"use client";
import React from "react";
import { motion } from "framer-motion";

const Loading = () => {
  return (
    <motion.div
      initial={{ height: 0 }}
      animate={{ height: 100 }}
      exit={{ opacity: 0 }}
      className="dark:bg-neutral-950 min-h-screen w-full flex justify-center items-center"
    >
      <motion.div
        className="w-80 h-80  mx-auto flex flex-col justify-center items-center dark:bg-neutral-950  "
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className="text-4xl dark:text-neutral-200 animate-pulse">
          Wait a sec...
        </span>
      </motion.div>
    </motion.div>
  );
};

export default Loading;

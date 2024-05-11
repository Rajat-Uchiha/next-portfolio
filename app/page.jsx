"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import Loading from "../components/Loading";
import { IoSunnyOutline } from "react-icons/io5";
import { PiMoonStarsLight } from "react-icons/pi";

export default function Home() {
  const [isVisible, setIsVisible] = useState(true);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {!isVisible ? (
        <main className={isDark && "dark"}>
          <Navbar />
          <Hero />
          <Experience />
          <Projects />
          <Footer />

          <button
            className="w-16 h-16 bg-black dark:bg-white rounded-full border-2 border-black fixed right-4 bottom-4 flex justify-center items-center
          "
            onClick={() => {
              setIsDark(!isDark);
            }}
          >
            {isDark ? (
              <IoSunnyOutline className="w-7 h-7 dark:invert-0 invert" />
            ) : (
              <PiMoonStarsLight className="w-7 h-7 dark:invert-0 invert" />
            )}
          </button>
        </main>
      ) : (
        <motion.div
          className={isDark && "dark"}
          key="loading"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Loading />
        </motion.div>
      )}
    </>
  );
}

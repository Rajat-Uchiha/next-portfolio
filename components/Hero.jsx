"use client";
import React from "react";
import Link from "next/link";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <section className=" w-full  mx-auto dark:bg-neutral-950 pt-10 ">
      <main className=" w-3/4 lg:w-1/2 mx-auto">
        <div className="font-Josefin">
          <h2 className="dark:text-neutral-200  text-xl lg:text-3xl font-bold leading-loose lg:leading-loose ">
            RAJAT KALOTRA{" "}
            <span className="text-sm font-normal">Software Engineer</span>
          </h2>
          <h2 className="dark:text-neutral-200 text-xl lg:text-2xl font-semibold leading-loose lg:leading-loose">
            <Typewriter
              options={{
                strings: ["I Code", "I Fix", "I Learn", "I Repeat"],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
        </div>
        <div className="py-4">
          <p className="font-Josefin dark:text-neutral-200 text-base lg:text-xl leading-loose lg:leading-loose">
            Development is what I enjoy. <br /> Usually thinks technically.
            <br /> New tech fascinates me. <br /> I got
            <Link href="https://www.instagram.com/urs_rajat7/">
              <span className="text-purple-600 cursor-pointer hover:text-purple-800 mx-2">
                friends
              </span>
            </Link>
            and they are my escapism.
          </p>
        </div>
      </main>
    </section>
  );
};

export default Hero;

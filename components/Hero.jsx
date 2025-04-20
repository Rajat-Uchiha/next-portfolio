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
            Hello 👋 World, Rajat here.
          </h2>
          <h2 className="dark:text-neutral-200 text-xl lg:text-3xl font-bold ">
            <Typewriter
              options={{
                strings: [
                  "Full-Stack Developer",
                  "Programmer",
                  "Web Designer",
                  "Mobile App Developer",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
        </div>
        <div className="py-4">
          <p className="font-Josefin dark:text-neutral-200 text-base lg:text-xl leading-loose lg:leading-loose">
            Enthusiastic learner specializing in development. <br /> I am Eager
            to combine technical expertise with design thinking to drive.
            <br /> Always open to work and collaborate with others. <br /> I
            love to spend time with
            <Link href="https://www.instagram.com/urs_rajat7/">
              <span className="text-purple-600 cursor-pointer hover:text-purple-800 mx-2">
                friends
              </span>
            </Link>
            when I don&apos;t feel like working. 😁
          </p>
        </div>
      </main>
    </section>
  );
};

export default Hero;

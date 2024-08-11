import React from "react";
import Link from "next/link";
const Experience = () => {
  return (
    <section className=" w-full mx-auto dark:bg-neutral-950 pt-10 ">
      <main className=" w-3/4 lg:w-1/2 mx-auto">
        <div className="font-Josefin">
          <h2 className="dark:text-neutral-200 text-xl lg:text-3xl font-bold  ">
            Experience
          </h2>
        </div>
        <div className="py-2">
          <p className="font-Josefin dark:text-neutral-200 text-base lg:text-lg leading-loose lg:leading-loose">
            Working as an SDE intern
            <Link href="https://techscholars.co.in">
              <span className="text-purple-600 cursor-pointer hover:text-purple-800 mx-2">
                TechScholars
              </span>
            </Link>
            <br />
            Primarily contributing in the frontend part of the website. <br /> I
            am using my{" "}
            <Link href="https://nextjs.org/">
              <span className="text-purple-600 cursor-pointer hover:text-purple-800 mx-2">
                Next.js
              </span>
            </Link>
            skills to build and improve the site. 🖥️
            <br />
            (March 2024 - Present)
          </p>
        </div>
      </main>
    </section>
  );
};

export default Experience;

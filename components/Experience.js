import React from "react";
import Link from "next/link";
const Experience = () => {
  return (
    <section className=" w-full mx-auto bg-gray-950 pt-10 ">
      <main className=" w-3/4 lg:w-1/2 mx-auto">
        <div className="font-Josefin">
          <h2 className="text-white text-xl lg:text-3xl font-bold  ">
            Experience
          </h2>
        </div>
        <div className="py-2">
          <p className="font-Josefin text-white text-base lg:text-lg leading-loose lg:leading-loose">
            Working as an SDE intern
            <Link href="https://www.linkedin.com/company/techscholarseducation/mycompany/verification/">
              <span className="text-purple-600 cursor-pointer hover:text-purple-800 mx-2">
                TechScholars
              </span>
              <br />
              Primarily contributing in the frontend part of the website.
              <br />
              (March 2024 - June 2024)
            </Link>
          </p>
        </div>
      </main>
    </section>
  );
};

export default Experience;

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
        <ul className="list-none">
          <li className="py-2">
            <p className="font-Josefin dark:text-neutral-200 text-base lg:text-lg leading-loose lg:leading-loose">
              - Management Trainee
              <Link href="https://smlisuzu.com/">
                <span className="text-purple-600 cursor-pointer hover:text-purple-800 mx-2">
                  @SML Isuzu
                </span>
              </Link>
              <br />
              Building web & mobile apps for the organization. <br /> Using
              <Link href="https://react.dev/">
                <span className="text-purple-600 cursor-pointer hover:text-purple-800 mx-2">
                  React
                </span>
              </Link>
              expertise to build applications.
              <br />
              (Sept 2024 - Present)
            </p>
          </li>
          <li className="py-2">
            <p className="font-Josefin dark:text-neutral-200 text-base lg:text-lg leading-loose lg:leading-loose">
              - SDE intern
              <Link href="https://techscholars.co.in">
                <span className="text-purple-600 cursor-pointer hover:text-purple-800 mx-2">
                  @TechScholars
                </span>
              </Link>
              <br />
              Looked after frontend of the web application. <br /> Used
              <Link href="https://nextjs.org/">
                <span className="text-purple-600 cursor-pointer hover:text-purple-800 mx-2">
                  Next.js
                </span>
              </Link>
              to build and optimize site.
              <br />
              (Mar 2024 - Sept 2024)
            </p>
          </li>
        </ul>
      </main>
    </section>
  );
};

export default Experience;

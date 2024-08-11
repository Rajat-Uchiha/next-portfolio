"use client";
import React from "react";
import Link from "next/link";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiAxios } from "react-icons/si";
import { RiJavascriptLine } from "react-icons/ri";
import { SiTailwindcss } from "react-icons/si";

const Projects = () => {
  return (
    <section className=" w-full mx-auto dark:bg-neutral-950 pt-10 min-h-96 ">
      <main className=" w-3/4 lg:w-1/2 mx-auto">
        <div className="font-Josefin">
          <h2 className="text-white text-xl lg:text-3xl font-bold ">
            Projects
          </h2>
        </div>
        <div className="py-4">
          <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <li className="border dark:text-neutral-200  p-5 space-y-2 rounded-md leading-loose lg:leading-loose">
              <Link href="https://devtales.netlify.app">
                <h2 className="text-purple-600 cursor-pointer hover:text-purple-800 text-lg ">
                  Devtales
                </h2>
              </Link>
              <p>MERN based Blogging website.</p>
              <ul className="flex space-x-4 text-2xl flex-wrap">
                <li>
                  <FaReact />
                </li>
                <li>
                  <FaNodeJs />
                </li>
                <li>
                  <SiExpress />
                </li>
                <li>
                  <SiMongodb />
                </li>
                <li>
                  <SiAxios />
                </li>
                <li>
                  <RiJavascriptLine />
                </li>
                <li>
                  <SiTailwindcss />
                </li>
              </ul>
            </li>
            <li className="border dark:text-neutral-200  p-5 space-y-2 rounded-md leading-loose lg:leading-loose">
              <Link href="https://letscooktasty.netlify.app">
                <h2 className="text-purple-600 cursor-pointer hover:text-purple-800 text-lg ">
                  Letscooktasty
                </h2>
              </Link>
              <p>MERN based Recipe sharing website.</p>
              <ul className="flex space-x-4 text-2xl flex-wrap">
                <li>
                  <FaReact />
                </li>
                <li>
                  <FaNodeJs />
                </li>
                <li>
                  <SiExpress />
                </li>
                <li>
                  <SiMongodb />
                </li>
                <li>
                  <RiJavascriptLine />
                </li>
                <li>
                  <SiTailwindcss />
                </li>
              </ul>
            </li>
            <li className="border dark:text-neutral-200  p-5 space-y-2 rounded-md leading-loose lg:leading-loose">
              <Link href="https://myapimaster.netlify.app">
                <h2 className="text-purple-600 cursor-pointer hover:text-purple-800 text-lg ">
                  API-Master
                </h2>
              </Link>
              <p>React.js based website to test APIs during Development.</p>
              <ul className="flex space-x-4 text-2xl flex-wrap">
                <li>
                  <FaReact />
                </li>
                <li>
                  <RiJavascriptLine />
                </li>
                <li>
                  <SiTailwindcss />
                </li>
                <li>
                  <SiAxios />
                </li>
              </ul>
            </li>
            <li className="border dark:text-neutral-200  p-5 space-y-2 rounded-md leading-loose lg:leading-loose">
              <Link href="https://edittextwithrajat.netlify.app">
                <h2 className="text-purple-600 cursor-pointer hover:text-purple-800 text-lg ">
                  Edit-Text
                </h2>
              </Link>
              <p> React.js based text editor.</p>
              <ul className="flex space-x-4 text-2xl flex-wrap">
                <li>
                  <FaReact />
                </li>
                <li>
                  <RiJavascriptLine />
                </li>
                <li>
                  <SiTailwindcss />
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </main>
    </section>
  );
};

export default Projects;

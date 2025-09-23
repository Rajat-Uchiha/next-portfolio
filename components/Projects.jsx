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
import { SiDotnet } from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";
import { SiSap } from "react-icons/si";

const Projects = () => {
  return (
    <section className=" w-full mx-auto dark:bg-neutral-950 pt-10 min-h-96 ">
      <main className=" w-3/4 lg:w-1/2 mx-auto">
        <div className="font-Josefin">
          <h2 className="dark:text-neutral-200 text-xl lg:text-3xl font-bold  ">
            Projects
          </h2>
        </div>
        <div className="py-4">
          <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <li className="border dark:text-neutral-200  p-5 space-y-2 rounded-md leading-loose lg:leading-loose">
              <Link href="https://play.google.com/store/apps/details?id=com.sml.pmapp&hl=en_IN">
                <h2 className="text-purple-600 cursor-pointer hover:text-purple-800 text-lg font-semibold">
                  SMLI PM{" "}
                  <span className="text-white font-light text-xs">
                    Mobile App
                  </span>
                </h2>
              </Link>

              <p>Plant Maintenance Application.</p>
              <ul className="flex space-x-4 text-2xl flex-wrap">
                <li>
                  <FaReact />
                </li>
                <li>
                  <SiAxios />
                </li>
                <li>
                  <RiJavascriptLine />
                </li>
                <li>
                  <SiSap />
                </li>
                <li>
                  <SiDotnet />
                </li>
                <li>
                  <DiMsqlServer />
                </li>
              </ul>
            </li>
            <li className="border dark:text-neutral-200  p-5 space-y-2 rounded-md leading-loose lg:leading-loose">
              <Link href="https://smlisuzu.net/smart">
                <h2 className="text-purple-600 cursor-pointer hover:text-purple-800 text-lg font-semibold">
                  Ess Portal{" "}
                  <span className="text-white font-light text-xs">
                    Team Project
                  </span>
                </h2>
              </Link>

              <p>Employee Self Service Platform.</p>
              <ul className="flex space-x-4 text-2xl flex-wrap">
                <li>
                  <FaReact />
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
                <li>
                  <SiDotnet />
                </li>
                <li>
                  <DiMsqlServer />
                </li>
              </ul>
            </li>
            <li className="border dark:text-neutral-200  p-5 space-y-2 rounded-md leading-loose lg:leading-loose">
              <Link href="https://smlisuzu.net/budget">
                <h2 className="text-purple-600 cursor-pointer hover:text-purple-800 text-lg font-semibold">
                  Budget Portal{" "}
                  <span className="text-white font-light text-xs">
                    Team Project
                  </span>
                </h2>
              </Link>
              <p>SML Budget Portal</p>
              <ul className="flex space-x-4 text-2xl flex-wrap">
                <li>
                  <FaReact />
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
                <li>
                  <SiDotnet />
                </li>
                <li>
                  <DiMsqlServer />
                </li>
              </ul>
            </li>
            <li className="border dark:text-neutral-200  p-5 space-y-2 rounded-md leading-loose lg:leading-loose">
              <Link href="https://devtales.netlify.app">
                <h2 className="text-purple-600 cursor-pointer hover:text-purple-800 text-lg font-semibold">
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
                <h2 className="text-purple-600 cursor-pointer hover:text-purple-800 text-lg font-semibold">
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
                <h2 className="text-purple-600 cursor-pointer hover:text-purple-800 text-lg font-semibold">
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
                <h2 className="text-purple-600 cursor-pointer hover:text-purple-800 text-lg font-semibold">
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

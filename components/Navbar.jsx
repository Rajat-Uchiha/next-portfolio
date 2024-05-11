"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../public/logo.png";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaHackerrank } from "react-icons/fa";


const Navbar = () => {


  return (
    <>
      <div className="w-full dark:bg-neutral-950">
        <div className=" dark:text-neutral-200 flex  flex-col space-y-4 sm:flex-row  py-4 w-3/4 lg:w-1/2 mx-auto justify-between items-center ">
          <div className="flex-1">
            <Image className="w-20 dark:invert" src={Logo} alt="logo" />
          </div>
          <div className="flex-none">
            <ul className="menu flex menu-horizontal px-1 items-center space-x-4">
              <li>
                <Link href="https://github.com/Rajat-Uchiha">
                  <FaGithub className="h-6 w-6 " />
                </Link>
              </li>
              <li>
                <Link href="https://www.linkedin.com/in/rajat-kalotra-319521230/">
                  <FaLinkedin className="h-6 w-6 " />
                </Link>
              </li>
              <li>
                <Link href="https://leetcode.com/rajat_171/">
                  <SiLeetcode className="h-6 w-6 " />
                </Link>
              </li>
              <li>
                <Link href="https://www.hackerrank.com/profile/rajat_171">
                  <FaHackerrank className="h-6 w-6 " />
                </Link>
              </li>

              <li className="flex justifce">
            
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
